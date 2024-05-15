const Message = require("../models/MessagesM");
const User = require("../models/UsersM");
const { Op } = require("sequelize");
const { io, getReceiverId } = require("../socket/socket-io");

exports.sendMessage = async (req, res) => {
  const { message, senderId, receiverId } = req.body;
  try {
    console.log(message, senderId, receiverId);
    const result = await Message.create({
      content: message,
      senderId,
      receiverId,
    });
    console.log(result, "sent message");
    if (!result)
      return res.status(501).json({ message: "Something went wrong" });
    const socketReceiverId = getReceiverId(receiverId);
    if (socketReceiverId) {
      io.to(socketReceiverId).emit("newMessage", result);
    }
    return res.status(201).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

exports.getMessageBetweenTwoUser = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const result = await Message.findAll({
      where: {
        [Op.or]: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      },
      include: [
        {
          model: User,
          as: "Sender",
        },
        {
          model: User,
          as: "Receiver",
        },
      ],
    });
    console.log("message", result);

    res.json(result);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ error: "Error retrieving messages" });
  }
};
