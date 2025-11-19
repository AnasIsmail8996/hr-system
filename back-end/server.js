import dotenv from "dotenv";
dotenv.config()

import express from "express"
import dbConnection from "./db/config.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors"
import CustomerRoutes from "./routes/customerRoutes.js";
const app= express();

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],  
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

// db connection

dbConnection()




app.use('/api/user', userRoutes)
app.use('/api/customer', CustomerRoutes)


const PORT=process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`server   is running on ${PORT} `))