import mongoose from "mongoose";

const AvailabilitySchema = new mongoose.Schema(
  {
    date: Date,
    availability: [
      {
        roomId: {
          type: mongoose.Types.ObjectId,
          ref: "Room",
        },
        availableRooms: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Availability", AvailabilitySchema);
