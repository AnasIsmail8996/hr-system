import express from "express";
import {
 createCustomer, getAllCustomer, getSingleCustomer, updateCustomer, deleteCustomer
} from "../controllers/customerController.js";

const CustomerRoutes = express.Router();

CustomerRoutes.post("/create-customer", createCustomer);          
CustomerRoutes.get("/all-customer", getAllCustomer);           
CustomerRoutes.get("single-customer", getSingleCustomer);     
CustomerRoutes.put("update-customer/:id", updateCustomer);     
CustomerRoutes.delete("delete-customer/:id", deleteCustomer);   

export default CustomerRoutes;
