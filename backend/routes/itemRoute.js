import express from "express";
import { addItem, listItem, removeItem, searchItem } from "../controllers/itemController.js";
import multer from "multer";


const itemRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
  filename:(req,file,callback)=>{
    callback(null,file.originalname)
  }
})

const upload = multer({
  storage: storage,
})

itemRouter.post('/add',upload.fields([{name:'image',maxCount:1}]),addItem);

itemRouter.get('/list',listItem)

itemRouter.post('/remove',removeItem)

itemRouter.post('/search', searchItem)


export default itemRouter;