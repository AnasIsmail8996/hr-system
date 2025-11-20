import express from "express"
import { userRegister ,  userLogin, addUser, updateUser , getSingleUser} from "../controllers/userController.js";
import { adminOnly, checkVerify } from "../middlewares/authMiddlewares.js";


const userRoutes= express.Router();


userRoutes.post('/register', userRegister)
userRoutes.post("/login", userLogin);
userRoutes.put("/update-profile/:id", checkVerify, updateUser);
userRoutes.get("/get-single-user/:id", checkVerify, getSingleUser);

userRoutes.put("/add-profile/:id", [checkVerify, adminOnly ], addUser);


export default userRoutes;