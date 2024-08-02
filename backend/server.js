import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import itemRouter from './routes/itemRoute.js';
import cartRouter from './routes/cartRoute.js';

// app config
const app = express();

const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB()

// testing api
app.get('/',(req,res)=>{
  res.send("Hello World!");
})

// routes
app.use('/api/user',userRouter)
app.use("/images",express.static("uploads"))
app.use('/api/item',itemRouter)
app.use("/api/cart",cartRouter)


app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})
