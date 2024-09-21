import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import itemRouter from './routes/itemRoute.js';
import cartRouter from './routes/cartRoute.js';
import connectCloudinary from './config/cloudinary.js';
import orderRouter from './routes/orderRoute.js';
import adminRouter from './routes/adminRoute.js';

// app config
const app = express();

const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();
connectCloudinary();

// testing api
app.get('/',(req,res)=>{
  res.send("Hello World!");
})

// routes
app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)
app.use('/api/item',itemRouter)
app.use("/api/cart",cartRouter)
app.use('/api/order',orderRouter)


app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})
