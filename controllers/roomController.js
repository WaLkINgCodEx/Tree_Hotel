import Room from "../models/roomModel.js";
import Availability from "../models/availabilityModel.js";
import mongoose from "mongoose";
import moment from "moment";

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
  const totalNights = Math.floor(
    (new Date(enddate) - new Date(startdate)) / (1000 * 60 * 60 * 24)
  );

  let rooms = await Availability.aggregate([
    {
      $match: {
        date: { $gte: new Date(startdate), $lt: new Date(enddate) },
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
        "availability.availableRooms": { $gte: 1 },
      },
    },
    {
      $group: {
        _id: "$roomDetails._id",
        availableDays: { $sum: 1 },
        roomDetails: { $first: { $arrayElemAt: ["$roomDetails", 0] } },
      },
    },
    {
      $match: {
        availableDays: { $eq: totalNights },
      },
    },
    {
      $replaceRoot: { newRoot: "$roomDetails" },
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
