import Availability from "./models/availabilityModel.js";
import Room from "./models/roomModel.js";
import mongoose from "mongoose";
const roomAvailabilityData = [
  {
    roomTypeId: "64d546396619ec193f122951",
    availableRooms: 10,
  },
  {
    roomTypeId: "64d546396619ec193f122952",
    availableRooms: 10,
  },
  {
    roomTypeId: "64d546396619ec193f122954",
    availableRooms: 10,
  },
  {
    roomTypeId: "64d546396619ec193f122955",
    availableRooms: 8,
  },
  {
    roomTypeId: "64d546396619ec193f12295a",
    availableRooms: 4,
  },
  {
    roomTypeId: "64d546396619ec193f122956",
    availableRooms: 8,
  },
  {
    roomTypeId: "64d546396619ec193f12295b",
    availableRooms: 4,
  },
  {
    roomTypeId: "64d546396619ec193f12295c",
    availableRooms: 4,
  },
  {
    roomTypeId: "64d546396619ec193f122959",
    availableRooms: 4,
  },
  {
    roomTypeId: "64d546396619ec193f12295d",
    availableRooms: 1,
  },
  {
    roomTypeId: "64d546396619ec193f122957",
    availableRooms: 8,
  },
  {
    roomTypeId: "64d546396619ec193f122958",
    availableRooms: 8,
  },
  {
    roomTypeId: "64d546396619ec193f122953",
    availableRooms: 10,
  },
];

//   try {
//     const availability = await Availability.create(req.body);
//     res.status(201).json({ availability });
//   } catch (error) {
//     res.status(500).json({ msg: `server error ${error}` });
//   }

try {
  const startDate = new Date("2023-08-10");
  const endDate = new Date("2023-09-30");
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const availabilityItems = [];

    for (const roomData of roomAvailabilityData) {
      const room = await Room.findById(roomData.roomTypeId); // Find the room by ID
      if (room) {
        availabilityItems.push({
          roomId: room._id, // Reference to the room document
          availableRooms: roomData.availableRooms,
        });
      }
    }

    const availabilityDocument = await Availability.create({
      date,
      availability: availabilityItems,
    });
  }
  res.status(201).json({ msg: "complete" });
} catch (error) {
  res.status(500).json({ msg: "server error" });
}
