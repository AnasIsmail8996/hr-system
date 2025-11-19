import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  billingAddress: { type: String },
  shippingAddress: { type: String }
});

export default mongoose.model("Customer", customerSchema);
