import jwt from "jsonwebtoken";
import itemModel from "../models/itemModel.js";

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      return res.json({ success: true, token, message: "login successfull" });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

const updateItem = async (req, res) => {
  try {
    const {
      itemId,
      name,
      type,
      percentage,
      newprice,
      oldprice,
      color,
      size,
      brand,
      os,
      screensize,
      cpu,
      display,
      resolution,
      refreshrate,
      earplacement,
      formfactor,
    } = req.body;

    await itemModel.findByIdAndUpdate(itemId, {
      name,
      type,
      percentage,
      newprice,
      oldprice,
      color,
      size,
      brand,
      os,
      screensize,
      cpu,
      display,
      resolution,
      refreshrate,
      earplacement,
      formfactor,
    });

    res.json({ success: true, message: "Updated" });
  } catch (err) {
    res.json({ success: false, message: "Not Updated" });
  }
};

export { loginAdmin, updateItem };
