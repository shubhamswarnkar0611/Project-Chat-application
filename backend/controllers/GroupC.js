const Group = require("../models/GroupM");
const GroupMessage = require("../models/GroupMessagesM");
const User = require("../models/UsersM");
const GroupMembership = require("../models/GroupMembershipM");
const { getReceiverId, io } = require("../socket/socket-io");
const { where } = require("sequelize");

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
    res.status(200).json(group);
  } catch (err) {
    res.json(err.message);
  }
};

exports.sendGroupMessage = async (req, res) => {
  try {
    const { message, senderId, GroupId } = req.body;
    if (message === undefined || message === null)
      return res.status(501).json("Message is required");
    const newMessage = await GroupMessage.create({
      content: message,
      senderId,
      GroupId,
    });
    console.log(newMessage);
    const messageDetails = await GroupMessage.findOne({
      where: {
        id: newMessage.id,
      },
      include: [
        {
          model: User,
          as: "Sender",
        },
      ],
    });
    const groupmember = await GroupMembership.findAll({
      where: {
        GroupId,
      },
    });

    if (groupmember) {
      groupmember.map((member) => {
        if (member.UserId === senderId) return;
        console.log("memeber", member.UserId);
        const socketReciverId = getReceiverId(member.UserId);
        if (socketReciverId) {
          io.to(socketReciverId).emit("newGroupMessage", messageDetails);
        }
      });
    }
    res.status(200).json(messageDetails);
  } catch (err) {
    res.json(err.message);
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
    
    users.map(async (user) => {
      const newMember = await GroupMembership.create({
        UserId: user.id,
        GroupId: newGroup.id,
        isAdmin: user.isAdmin,
      });
    });

    res.status(200).json(name);
  } catch (e) {
    res.json(e.message);
  }
};

exports.getGroupMessages = async (req, res) => {
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

    res.json(result);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ error: "Error retrieving messages" });
  }
};

exports.getAllMember = async (req, res) => {
  const { GroupId } = req.body;
  try {
    const allMember = await GroupMembership.findAll({
      where: {
        GroupId,
      },
      include: [
        {
          model: User,
        },
      ],
    });

    res.status(200).json(allMember);
  } catch (error) {
    console.error("Error retrieving messages:", error.message);
    res.status(500).json({ error: "Error retrieving messages" });
  }
};

exports.getCurrentUserIsAdmin = async (req, res) => {
  const { GroupId, UserId } = req.body;
  console.log("working", GroupId, UserId);
  try {
    const userIsAdmin = await GroupMembership.findOne({
      where: { GroupId, UserId },
    });

    res.status(200).json(userIsAdmin);
  } catch (error) {
    console.error("Error retrieving messages:", error.message);
    res.status(500).json({ error: "Error retrieving isAdmin" });
  }
};

exports.MakeAdmin = async (req, res) => {
  const { GroupId, UserId } = req.body;
  console.log("working", GroupId, UserId);
  try {
    const MemberDetails = await GroupMembership.findOne({
      where: { GroupId, UserId },
    });
    const { isAdmin } = MemberDetails.dataValues;

    if (isAdmin == 0) {
      await GroupMembership.update(
        { isAdmin: 1 },
        { where: { GroupId, UserId } }
      );
      res.status(200).json({ message: "Admin added" });
    }
  } catch (error) {
    console.error("Error retrieving messages:", error.message);
    res.status(500).json({ error: "Error retrieving messages" });
  }
};

exports.kickUserFromGroup = async (req, res) => {
  try {
    const { GroupId, UserId } = req.body;
    const memberDetails = await GroupMembership.findOne({
      where: { GroupId, UserId },
    });

    if (!memberDetails) {
      return res.status(404).json({ error: "Membership not found" });
    }
    await memberDetails.destroy();
    res.status(200).json({ message: "User removed from group successfully" });
  } catch (error) {
    console.error("Error removing user from group:", error.message);
    res.status(500).json({ error: "Error removing user from group" });
  }
};

exports.addUserToGroup = async (req, res) => {
  try {
    const { GroupId, UserId } = req.body;

    const newMember = await GroupMembership.create({
      UserId,
      GroupId,
      isAdmin: false,
    });

    res.status(200).json(newMember);
  } catch (e) {
    res.json(e.message);
  }
};
