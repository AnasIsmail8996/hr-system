import express from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

import { checkVerify } from "../middlewares/authMiddlewares.js"; 
import { adminOnly } from "../middlewares/authMiddlewares.js"; 

const productsRouter = express.Router();


productsRouter.post("/create-product", checkVerify, adminOnly,  createProduct);
productsRouter.get("/get-all-product", checkVerify, getAllProducts);
productsRouter.get("get-single-product/:id", checkVerify,  getSingleProduct);
productsRouter.put("update-product/:id", checkVerify, adminOnly, updateProduct);
productsRouter.delete("delete-product/:id", checkVerify,adminOnly,  deleteProduct);

export default productsRouter;
