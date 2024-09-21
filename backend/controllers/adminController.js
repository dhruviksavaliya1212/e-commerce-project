import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import adminModel from "../models/adminModel.js";



const loginAdmin = async(req,res) => {

  const {email, password} = req.body;

  try {
  //   if(name === "admin" && password === "password"){
  //     const token = jwt.sign({name}, process.env.JWT_SECRET, { expiresIn: '1h' });
  //     return res.json({ success: true, token });
  //   } else {
  //     return res.json({ success: false, message: "Invalid credentials" });
  //   }
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).json({ success: false, message: "Server Error" });
  // }

  // Add your code here to validate the credentials and generate a JWT token for the admin.
  // You can use the provided JWT library to create the token and return it in the response.
  // Make sure to validate the input data and handle any potential errors gracefully.

  // Example:
  // const token = jwt.sign({ name }, process.env.JWT_SECRET, {
    
  const admin  = await adminModel.findOne({ email });
  if(!admin){
    return res.json({ success: false, message: "Admin not found" });

  }
  
  const isMatch  = await bcrypt.compare(password, admin.password);
  
  if(!isMatch){
    return res.json({ success: false, message: "Invalid credentials" });
  }

  const token = createToken(admin._id);
  return res.json({ success: true, token, message:"Login successful" });

  } 
  catch(err){
    console.log(err)
  }

}
const createToken = (id) => {
 return jwt.sign({id}, process.env.JWT_SECRET)
}


const registerAdmin = async(req,res) => {
  const {name,email,password} = req.body;

  try {
    // if user already exist
    const exist = await adminModel.findOne({ email });
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

    const newAdmin = new adminModel({
      name,
      email,
      password: hashpassword
    })

    const admin = await newAdmin.save();
    const token = createToken(admin._id);
    res.json({ success: true, token, message: "Registered successfull"});
  } catch (err) {
    console.log(err)
    res.json({ success: false, message: "Something went wrong"})
  }
}

export {loginAdmin, registerAdmin}