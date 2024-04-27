const bcrypt = require("bcrypt");
const Users = require("../models/UsersM");
const jwt = require("jsonwebtoken");
const JWT_SECRETE = "$ecreteHai";

exports.signup = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  console.log("shubham : ", req.body);
  if (!firstName || !email || !password || !phone)
    return res.status(404).json("Please fill all required fields");
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const result = await Users.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: hashPassword,
    });
    const authToken = jwt.sign({ userId: result.id }, JWT_SECRETE);
    res.status(200).json(authToken);
  } catch (e) {
    let msg;
    console.log("shubham : ", e.name);
    if (e.name == "SequelizeUniqueConstraintError") {
      msg = "User already exists";
    } else {
      msg = e.message;
    }
    res.status(400).json(msg);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(404).json("Please fill all required fields");
  try {
    const userDetails = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (!userDetails) return res.status(404).json("User not found");
    const isMatch = await bcrypt.compare(password, userDetails.password);
    if (!isMatch) return res.status(400).json("Invalid credentials");
    const authToken = jwt.sign({ userId: userDetails.id }, JWT_SECRETE);
    res.status(200).json(authToken);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.getUserData = async (req, res) => {
  const { userId } = req.user;
  try {
    const userData = await Users.findByPk(userId);
    res.status(200).json(userData);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
