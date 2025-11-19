import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  unitPrice: { type: Number, required: true }
});

export default mongoose.model("Product", productSchema);
