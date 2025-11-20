import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String },  
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "admin" },
  imageUrl: {type : String, required : false , default : null }
});



const User= mongoose.model("User", userSchema);
export default User 
