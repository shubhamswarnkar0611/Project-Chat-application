const Message = require("../models/MessagesM");
const Users = require("../models/UsersM");
const { Op } = require("sequelize");
const Conversation = require("../models/ConversationM");
const { io, getReceiverId } = require("../socket/socket-io");
const { json } = require("body-parser");

exports.sendMessage = async (req, res) => {
  const { message, senderId, receiverId } = req.body;
  try {
    const result = await Message.create({ message, senderId, receiverId });
    if (!result)
      return res.status(501).json({ message: "Something went wrong" });
    const conversation = await Conversation.create({
      senderId,
      receiverId,
      MessageId: result.id,
    });

    const socketReceiverId = getReceiverId(receiverId);
    if (socketReceiverId) {
      io.to(socketReceiverId).emit("newMessage", result );
    }
    return res.status(201).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

exports.getMessageBetweenTwoUser = async (req, res) => {
  const { senderId, receiverId } = req.body;
  console.log("working", senderId, receiverId);
  const result = await Conversation.findAll({
    where: {
      [Op.or]: [
        { senderId, receiverId }, // Check for senderId -> receiverId
        { senderId: receiverId, receiverId: senderId }, // Check for receiverId -> senderId
      ],
    },
    include: [
      {
        model: Message,
      },
    ],
  });
  res.json(result);
};
