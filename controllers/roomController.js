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
  const { adultnumber, kidnumber, startdate, enddate, sort } = await req.query;
  const totalGuest = Number(adultnumber) + Number(kidnumber);
  console.log(totalGuest);
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
      $match: {
        "roomDetails.capacity": { $gte: totalGuest },
      },
    },
  ]);

  // console.log(rooms);

  res.status(200).json({ rooms });

  // const sortOptions = {
  //   newest: "-createdAt",
  //   oldest: "createdAt",
  //   "a-z": "position",
  //   "z-a": "-position",
  // };

  // const sortKey = sortOptions[sort] || sortOptions.newest;
};
