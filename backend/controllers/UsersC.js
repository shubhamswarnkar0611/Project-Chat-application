const bcrypt = require("bcrypt");
const Users = require("../models/UsersM");
exports.signup = async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !password || !phone)
    return res.status(404).json("Please fill all required fields");
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword =await bcrypt.hash(password, salt);
    const result = await Users.create({
      name: name,
      email: email,
      phone: phone,
      password: hashPassword,
    });
    res.status(200).json(result);
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
