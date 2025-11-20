import express from "express";
import {
 createCustomer, getAllCustomer, getSingleCustomer, updateCustomer, deleteCustomer
} from "../controllers/customerController.js";
import { adminOnly } from "../middlewares/authMiddlewares.js";

const CustomerRoutes = express.Router();

CustomerRoutes.post("/create-customer", adminOnly , createCustomer);          
CustomerRoutes.get("/all-customer", getAllCustomer);           
CustomerRoutes.get("single-customer", getSingleCustomer);     
CustomerRoutes.put("update-customer/:id", adminOnly,  updateCustomer);     
CustomerRoutes.delete("delete-customer/:id", adminOnly ,deleteCustomer);   

export default CustomerRoutes;
