import express, { Router } from "express";
import serverless from "serverless-http";
import * as dotenv from "dotenv";
// import { router } from "./roomController"; // Import the Express Router
import Availability from "./availabilityModel.js";
import { connectToDatabase, disconnectFromDatabase } from "./db"; // Import the database connection function
dotenv.config();

// Connect to the database when the function is initialized

// Create an Express app instance
const api = express();
const router = Router();

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
    // console.log("server_adult", adultnumber);
    console.log("rooms", rooms);
    res.status(200).json({ rooms });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Use the roomsRouter for the /api2/ route
api.use("/api/v1/", router);

// Define the Netlify function handler
export const handler = async (event, context) => {
  const mongoURL = process.env.MONGO_URL;
  // console.log(mongoURL);
  await connectToDatabase(mongoURL);

  const result = await serverless(api)(event, context);

  console.log("result", result);

  // Disconnect from the database after the request is done
  await disconnectFromDatabase();

  return result;
};
