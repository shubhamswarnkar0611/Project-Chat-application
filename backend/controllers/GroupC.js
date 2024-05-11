const Group = require("../models/GroupM");
const GroupMessage = require("../models/GroupMessagesM");
const User = require("../models/UsersM");

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.sendGroupMessage = async (req, res) => {
  try {
    const { message, senderId, GroupId } = req.body;
    console.log(message, senderId, GroupId);
    const newMessage = await GroupMessage.create({
      content: message,
      senderId,
      GroupId,
    });
    console.log(newMessage);
    res.status(200).json(newMessage);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.createGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const newGroup = await Group.create({
      name,
    });
    console.log(newGroup, "created");
    res.status(200).json(newGroup);
  } catch (e) {
    res.status(404).json(e);
  }
};

exports.getAllGroupMessages = async (req, res) => {
  const { senderId, GroupId } = req.body;

  try {
    const result = await GroupMessage.findAll({
      where: {
        GroupId,
      },
      include: [
        {
          model: User,
          as: "Sender",
        },
        {
          model: Group,
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
