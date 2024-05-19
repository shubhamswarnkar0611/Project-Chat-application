const express = require("express")
const router = express.Router()

const GroupController = require("../controllers/GroupC")

// Routes
router.post('/getAllGroups',GroupController.getAllGroups)
router.post('/sendGroupMessage',GroupController.sendGroupMessage)
router.post('/createGroup',GroupController.createGroup)
router.post('/getGroupMessages',GroupController.getGroupMessages)
router.post('/getAllMember',GroupController.getAllMember)
router.post("/getCurrentUserIsAdmin",GroupController.getCurrentUserIsAdmin)
router.post("/MakeAdmin",GroupController.MakeAdmin)
router.post("/kickUser",GroupController.kickUserFromGroup)
router.post("/addUserToGroup",GroupController.addUserToGroup)

module.exports=router