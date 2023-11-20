import express, { Router } from "express";
import serverless from "serverless-http";
import * as dotenv from "dotenv";
import { router } from "./roomController"; // Import the Express Router
// import Availability from "./availabilityModel.js";
import { connectToDatabase, disconnectFromDatabase } from "./db"; // Import the database connection function
dotenv.config();

// Create an Express app instance
const api = express();

// Use the roomsRouter for the /api/ route
api.use("/.netlify/functions/api", router);

// Define the Netlify function handler
export const handler = async (event, context) => {
  // console.log("event", event);
  // console.log("context", context);
  const mongoURL = process.env.MONGO_URL;
  // console.log(mongoURL);
  await connectToDatabase(mongoURL);

  const result = await serverless(api)(event, context);

  console.log("result", result);

  // Disconnect from the database after the request is done
  await disconnectFromDatabase();

  return result;
};
