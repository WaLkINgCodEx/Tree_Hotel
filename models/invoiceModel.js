import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Types.ObjectId,
    ref: "Room",
  },
  offer: String,
  totalPrice: Number,
  tax: Number,
  checkIn: Date,
  checkOut: Date,
  adult: Number,
  children: Number,
  contact: {
    prefix: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    country: String,
    zip: String,
  },
  specialRequest: String,
  arrivalTime: String,
  departTime: String,
  paymentMethod: String,
});

export default mongoose.model("Invoice", InvoiceSchema);
