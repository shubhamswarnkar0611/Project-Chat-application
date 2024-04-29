const express = require("express")
const router = express.Router()
const MessagesController = require("../controllers/MessagesC")

// Routes

router.post('/sendMessage',MessagesController.sendMessage)
router.get('/getAllMessage',MessagesController.getAllMessage)

module.exports=router