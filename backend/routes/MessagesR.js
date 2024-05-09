const express = require("express")
const router = express.Router()
const MessagesController = require("../controllers/MessagesC")

// Routes

router.post('/sendMessage',MessagesController.sendMessage)
router.post('/getAllMessage',MessagesController.getMessageBetweenTwoUser)

module.exports=router