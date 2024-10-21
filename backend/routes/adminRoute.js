import express from "express";
import { loginAdmin, updateItem } from "../controllers/adminController.js";



const adminRouter = express.Router();

adminRouter.post('/login', loginAdmin);
adminRouter.post('/update', updateItem);


export default adminRouter