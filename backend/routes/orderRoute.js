import express from "express";
import { PlaceOrder, listOrder, updateOrder, userOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";


const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, PlaceOrder);
orderRouter.get('/user',authMiddleware, userOrder);
orderRouter.get('/list', listOrder);
orderRouter.post('/status', updateOrder);

export default orderRouter;