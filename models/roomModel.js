import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  _id: String,
  room: String,
  roomType: String,
  roomLongDesc: String,
  enquires: String,
  capacity: Number,
  size: Number,
  bed: String,
  view: Array,
  quantity: Number,
  amenities: Array,
  basePrice: Number,
  image: String,
});

export default mongoose.model("Room", RoomSchema);
