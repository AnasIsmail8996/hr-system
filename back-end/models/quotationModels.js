import mongoose from "mongoose";

const quoteItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  description: String,
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  discountPercent: { type: Number, default: 0 },
  taxPercent: { type: Number, default: 0 },
  lineTotal: { type: Number, required: true }
});

const quoteSchema = new mongoose.Schema({
  quoteNumber: { type: String, required: true, unique: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  issuedDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ["pending", "sent", "paid", "cancelled"], default: "pending" },

  items: [quoteItemSchema],

  subTotal: Number,
  discountTotal: Number,
  taxTotal: Number,
  grandTotal: Number,
  notes: String,

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Quote", quoteSchema);
