import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

const PlaceOrder = async(req,res) =>{
  try {
    const newOrder = new orderModel({
      userId:req.body.userId,
      items:req.body.items,
      address:req.body.address,
      amount:req.body.amount
    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
    res.json({ success: true, message:"Order placed successfully"})
  } catch (err) {
  }
}

const userOrder = async(req,res) =>{
  try {
    const orders = await orderModel.find({userId:req.body.userId});
    res.json({ success: true, message:"Orders fetched successfully", data:orders})
  } catch (err) {
  }

}

const listOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders,message:""})
  } catch (err) {
    res.json({success:false,message:"Error"})
  }
}

// api for updating order status
const updateOrder = async (req,res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({success:true,message:"Status updated"})
  } catch (err) {
    res.json({success:false,message:"Error"})
  }
}

export { PlaceOrder, listOrder, updateOrder, userOrder } 