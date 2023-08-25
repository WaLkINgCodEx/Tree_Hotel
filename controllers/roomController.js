import Room from "../models/roomModel.js";
import Availability from "../models/availabilityModel.js";
import mongoose from "mongoose";

export const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json({ room });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};

export const getAllRooms = async (req, res) => {
  const { adultnumber, kidnumber, startdate, enddate, sort } = req.query;
  const totalGuest = Number(adultnumber) + Number(kidnumber);

  let rooms = await Availability.aggregate([
    {
      $match: {
        date: { $gte: new Date(startdate), $lt: new Date(enddate) },
        "availability.availableRooms": { $gt: 1 },
      },
    },
    {
      $unwind: "$availability",
    },
    {
      $lookup: {
        from: "rooms",
        localField: "availability.roomId",
        foreignField: "_id",
        as: "roomDetails",
      },
    },
    {
      $unwind: "$roomDetails",
    },
    {
      $addFields: {
        "availability.room": "$roomDetails.room",
        "availability.roomType": "$roomDetails.roomType",
        "availability.roomLongDesc": "$roomDetails.roomLongDesc",
        "availability.capacity": "$roomDetails.capacity",
        "availability.size": "$roomDetails.size",
        "availability.bed": "$roomDetails.bed",
        "availability.view": "$roomDetails.view",
        "availability.quantity": "$roomDetails.quantity",
        "availability.amenities": "$roomDetails.amenities",
        "availability.basePrice": "$roomDetails.basePrice",
        "availability.image": "$roomDetails.image",
      },
    },
    {
      $group: {
        _id: "$_id",
        date: { $first: "$date" },
        availability: { $push: "$availability" },
      },
    },
    {
      $match: {
        "availability.capacity": { $gte: totalGuest },
      },
    },
  ]);

  console.log(rooms);

  res.status(200).json({ rooms });

  // const sortOptions = {
  //   newest: "-createdAt",
  //   oldest: "createdAt",
  //   "a-z": "position",
  //   "z-a": "-position",
  // };

  // const sortKey = sortOptions[sort] || sortOptions.newest;
};
