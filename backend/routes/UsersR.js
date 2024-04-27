const express = require("express")
const router = express.Router()
const UsersController = require("../controllers/UsersC")
const fetchUser = require("../middlewares/fetchUser")

// Routes

router.post('/signup',UsersController.signup)
router.post('/login',UsersController.login)
router.post('/getUserData',fetchUser.fetchUserByToken,UsersController.getUserData)

module.exports=router