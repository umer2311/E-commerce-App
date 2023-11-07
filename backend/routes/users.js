const express = require('express');
const router=express.Router();
const user=require('../controllers/users');
const checkRole=require('../middleware/roleMiddleware')

router.post("/signUp", user.signUpUser);
router.post("/logIn", user.LoginUser);

router.post("/forgot-password", user.forgotPassword);
router.put("/reset-password/:otp", user.resetPassword);
router.get("/getAllUser",checkRole(["Admin"]), user.getAllUser);
router.get("/getUserByid/:id", user.getUserById);
router.delete("/deleteUserByid/:id",checkRole(["Admin"]), user.deleteUser);
router.put("/updateUserAdmin/:id",checkRole(["Admin"]), user.updateUser);
router.put("/updateUserByid/:id", user.updateUserInfo);

module.exports=router; 