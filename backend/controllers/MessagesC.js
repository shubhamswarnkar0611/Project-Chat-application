const Message = require("../models/MessagesM");
const Users = require("../models/UsersM");

exports.sendMessage = async (req, res) => {
  const { message, id } = req.body;
  console.log("working", message, id);
  const result = await Message.create({ message, UserId: id });
  console.log("result", result);
  const { firstName, lastName, phone, email } = await Users.findByPk(id);
  res.status(201).json({ firstName, lastName, phone, email, result });
};

exports.getAllMessage = async (req, res) => {
  const result = await Message.findAll({
    include: [
      {
        model: Users,
        attributes: ["id", "firstName", "lastName", "email", "phone"],
      },
    ],
  });
  res.json(result);
};
