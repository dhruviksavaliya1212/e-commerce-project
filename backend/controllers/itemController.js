import itemModel from "../models/itemModel.js";
import { v2 as cloudinary} from "cloudinary";

// Add Product
const addItem = async (req,res) =>{

    try {
    const name=req.body.name;
    const type=req.body.type;
    const description=req.body.description;
    const newprice=req.body.newprice;
    const oldprice=req.body.oldprice;
    const color=req.body.color;
    const size=req.body.size;
    const percentage=req.body.percentage;
    const os=req.body.os;
    const cpu=req.body.cpu;
    const category=req.body.category;
    const brand=req.body.brand;
    const screensize=req.body.screensize;
    const resolution=req.body.resolution;
    const refreshrate=req.body.refreshrate;
    const display=req.body.display;
    const earplacement=req.body.earplacement;
    const formfactor=req.body.formfactor;
    const imageFile=req.files.image[0];
    const imageUpload= await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});

      const itemData = {
        name,
        type,
        description,
        newprice,
        oldprice,
        color,
        size,
        percentage,
        os,
        cpu,
        category,
        brand,
        screensize,
        resolution,
        refreshrate,
        display,
        earplacement,
        formfactor,
        image:imageUpload.secure_url
      }

      const item = itemModel(itemData);
      await item.save();
      res.json({success:true,message:"Product Added"})

    } 
  catch(err){
    console.log(err)
    res.json({success:false,message:"Error"})
  }
}

// List all Product
const listItem = async (req,res) => {
  try{
    const items = await itemModel.find({});
    res.json({success:true,data:items})
  }
  catch(err){
    res.json({success:false,message:"Error"});
  }
}

//Remove Product
const removeItem = async (req,res) => {
  try{
    await itemModel.findByIdAndDelete(req.body.id)
    res.json({success:true, message:"Product Removed"})
  }
  catch(err){
    res.json({success:false, message:"Error"})
  }
}

//  Search Product 
const searchItem = async(req,res) => {
  try {
    const query = req.body.name ? {name: new RegExp(req.body.name, 'i')} : {category: new RegExp(req.body.category, 'i')}
    const item = await itemModel.find(query);
    res.json({success: true, message: "Product found", data: item})
  } catch (err) {
    console.log(err)
  }
}

export { addItem, listItem, removeItem, searchItem };