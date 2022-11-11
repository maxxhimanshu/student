const express = require('express');
const router = express.Router();
//....................Controllers
const auth=require("../auth/auth")
const controller=require("../controller/controller")

router.post("/user",controller.user)
router.post("/login" ,controller.login)
router.post("/add-student" ,auth.authentication, controller.student)
router.get("/all-students",auth.authentication,controller.getStudent)
router.put("/update-student/:id" ,auth.authentication, controller.updateStudent)
router.delete('/delete-student/:id',auth.authentication, controller.deleteStudent);

module.exports = router;