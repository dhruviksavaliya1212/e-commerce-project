import itemModel from "../models/itemModel.js";
import fs from "fs";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const addItem = async (req,res) =>{

    let image_filename = `${req.file.filename}`;

  const item = new itemModel({
    name:req.body.name,
    type:req.body.type,
    description:req.body.description,
    newprice:req.body.newprice,
    oldprice:req.body.oldprice,
    color:req.body.color,
    size:req.body.size,
    percentage:req.body.percentage,
    os:req.body.os,
    cpu:req.body.cpu,
    category:req.body.category,
    brand:req.body.brand,
    screensize:req.body.screensize,
    resolution:req.body.resolution,
    refreshrate:req.body.refreshrate,
    display:req.body.display,
    earplacement:req.body.earplacement,
    formfactor:req.body.formfactor,
    image:image_filename
  })
  try{
    await item.save();
    res.json({success:true,message:"Item added"})
  }
  catch(err){
    res.json({success:false,message:"Error"})
  }
}

//all food list
const listItem = async (req,res) => {
  try{
    const items = await itemModel.find({});
    res.json({success:true,data:items})
  }
  catch(err){
    res.json({success:false,message:"Error"});
  }
}

//remove food item
const removeItem = async (req,res) => {
  try{
    const item = await itemModel.findById(req.body.id);
    fs.unlink(`uploads/${item.image}`,()=>{})

    await itemModel.findByIdAndDelete(req.body.id)
    res.json({success:true, message:"Item Removed"})
  }
  catch(err){
    res.json({success:false, message:"Error"})
  }
}

export { addItem, listItem, removeItem };