const express = require("express")
const router = express.Router()

const GroupController = require("../controllers/GroupC")

// Routes
router.post('/getAllGroups',GroupController.getAllGroups)
router.post('/sendGroupMessage',GroupController.sendGroupMessage)
router.post('/createGroup',GroupController.createGroup)
router.post('/getAllGroupMessages',GroupController.getAllGroupMessages)

module.exports=router