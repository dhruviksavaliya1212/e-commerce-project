import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import validator from "validator";
import bcrypt from "bcrypt";

const loginUser = async(req,res) => {
  const {email, password} = req.body;

  try {
    const user = await userModel.findOne({ email });
    if(!user){
      return res.json({ success: false, message:"User not found!"})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.json({ success: false, message:" Invalid Credentials!"})
    }

    const token = createToken(user._id)
    res.json({ success: true, token, message:"Login successfull" })

  } catch (err) {
    res.json({ success:false, message:"Something went wrong"})
  }
}

const createToken = (id) =>{
  return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async(req,res) => {
  const {name,email,password} = req.body;

  try {
    // if user already exist
    const exist = await userModel.findOne({ email });
    if(exist){
      res.json({success:false, message: "User already exists"});
    }

    // validate the email and password
    if(name.length < 2){
      return res.json({success:false, message: "Name is required"});
    }
    if(!validator.isEmail(email)){
      return res.json({success:false, message: "Email is not valid"});
    }
    if(password.length < 8){
      return res.json({ success:false, message: "Password must be 8 characters long!"})
    }

    // hase the password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashpassword
    })

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token, message: "Registered successfull"});
  } catch (err) {
    console.log(err)
    res.json({ success: false, message: "Something went wrong"})
  }
}

export {loginUser, registerUser}