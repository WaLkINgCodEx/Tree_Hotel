import express from "express";
import Availability from "./availabilityModel.js";

// Create an Express Router
const router = express.Router();

// Define a route handler for GET /api/v1/rooms
router.get("/rooms", async (req, res) => {
  try {
    const { adultnumber, kidnumber, startdate, enddate } = req.query;
    const totalGuest = Number(adultnumber) + Number(kidnumber);
    const startDate = new Date(startdate);
    const endDate = new Date(enddate);
    const totalNights = Math.floor(
      (endDate - startDate) / (1000 * 60 * 60 * 24)
    );

    // const rooms = await Availability.find({});

    // console.log("server_adult", adultnumber);
    // console.log("server_startdate", startDate);
    // console.log("server_enddate", endDate);
    // console.log("totalNights", totalNights);

    let rooms = await Availability.aggregate([
      {
        $match: {
          date: { $gte: startDate, $lt: endDate },
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
    // console.log("rooms", rooms);
    res.status(200).json({ rooms });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

export { router };
