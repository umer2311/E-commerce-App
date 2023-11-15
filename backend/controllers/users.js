const User= require("../models/users")

const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");

//transporter for rest password
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// signup user 
const signUpUser=async(req , res)=> {
    try {
        const {name, email, password,phoneNumber}=req.body;
        const hash = await bcrypt.hash(password, 10)
        const user= new User({
            name,
            email,
            password: hash,
            phoneNumber

        })
        await user.save()
        console.log("umer")
        res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//login user 
const LoginUser =async(req,res) =>{
    try{
        const {email,password} = req.body;
        const user =await User.findOne({email}) //const user has the whole object containing email and password
        if(user && await bcrypt.compare(password,user.password))
        {
            const token = jwt.sign({userId: user.id, email:user.email, role:user.role}, process.env.PRIVATE_KEY,{expiresIn: "100 minute"})
            res.status(200).json({token,user})
            console.log("nawaz")
        }
        else
        {
            res.status(401).json({error: "Invalid credentials"})
        }
        
    }
    catch(error)
    {
        res.status(500).json({error: error.message})
    }
}


//forget password 
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const otp = (Math.floor(Math.random() * 9999 ));
        console.log(otp);
        const resetToken = crypto.randomBytes(20).toString("hex");
        user.resetPasswordOtp = otp;
        user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
        await user.save();
       url='http://localhost:3500/user'
        const resetLink = `${url}/reset-password/${otp}`;
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Password Reset Link",
            text: `Click on the following link to reset your password: ${resetLink}`,
        };
       
        await transporter.sendMail(mailOptions);
       
        res.status(200).json({ message: "Password reset email sent successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// reset password 
const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
      const resetOtp = req.params.otp;

        const user = await User.findOne({
            resetPasswordOtp: resetOtp,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid or expired reset token" });
        }

        // Update user's password and reset token fields
        const hash = await bcrypt.hash(password, 10);
        user.password = hash;
        user.resetPasswordOtp = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//get all users 
const getAllUser=async(req,res)=> {
    try{
    const user = await User.find()
    res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//get user by id 
const getUserById=async(req , res)=> {
    try{
    let user = await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({message:"User NOT FOUND"})
    }
    res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
//delete user signUpUser LoginUser forgotPassword resetPassword getAllUser getUserById deleteUser
const deleteUser=async(req , res)=> {
    try{
    let user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        return res.status(404).json({message:"user NOT FOUND"})
    }
    res.json({message:"delete successful"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
//update user for admin 
const updateUser=async(req , res)=> {
    try{
        const {name, email, password,phoneNumber,role}=req.body;
    let user = await User.findByIdAndUpdate(req.params.id,{name,email,password,phoneNumber,role},{new:true})
    if(!user){
        return res.status(404).json({message:"user NOT FOUND"})
    }
    console.log("2311");
    res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//update user info 
const updateUserInfo=async(req , res)=> {
    try{
        const {name, email, password,phoneNumber}=req.body;
    let user = await User.findByIdAndUpdate(req.params.id,{name,email,password,phoneNumber},{new:true})
    if(!user){
        return res.status(404).json({message:"user NOT FOUND"})
    }
    res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={
    signUpUser,
    LoginUser,
    forgotPassword,
    resetPassword,
    getAllUser,
    getUserById,
    deleteUser,
    updateUser,
    updateUserInfo

}