const Group = require("../models/GroupM");
const GroupMessage = require("../models/GroupMessagesM");
const User = require("../models/UsersM");
const GroupMembership = require("../models/GroupMembershipM");

exports.getAllGroups = async (req, res) => {
  const { UserId } = req.body;
  try {
    const group = await GroupMembership.findAll({
      where: UserId,
      include: [
        {
          model: Group,
        },
      ],
    });
    console.log(group);
    // const groups = await Group.findAll({where:});
    res.status(200).json(group);
  } catch (err) {
    res.json(err.message);
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
    const { name, users } = req.body;
    console.log(name, users.length);
    if (users.length < 3)
      return res.status(501).json("Minmum Three Users required");

    const newGroup = await Group.create({
      name,
    });
    console.log(newGroup);

    users.map(async (user) => {
      const newMember = await GroupMembership.create({
        UserId: user.id,
        GroupId: newGroup.id,
      });
    });

    res.status(200).json(name);
  } catch (e) {
    res.json(e.message);
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
