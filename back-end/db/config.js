import mongoose from "mongoose";


const dbConnection=async()=>{
    try {
        const URI= process.env.MONGO_URI
        mongoose.connect(URI)
        .then(()=> console.log(`DB Connection Successfully `))
        .catch(()=> console.log(`Error from  DB Connection`))
    } catch (error) {
        console.log(`Error DB connection`);
        
    }
}

export default dbConnection ;