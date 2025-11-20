import express from "express"
import { uploadImage } from "../middlewares/imageController.js";
import { checkVerify } from "../middlewares/authMiddlewares.js";
import { upload } from "../middlewares/multerMiddlewares.js";

const imagesRoute= express.Router();


imagesRoute.post('/upload', [checkVerify, upload.single('image')] ,uploadImage)


export default imagesRoute;
