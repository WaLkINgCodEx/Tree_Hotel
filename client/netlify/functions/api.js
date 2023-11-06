import express from "express";
import serverless from "serverless-http";
import * as dotenv from "dotenv";
import { router } from "./roomController"; // Import the Express Router
import { connectToDatabase, disconnectFromDatabase } from "./db"; // Import the database connection function
dotenv.config();

// Connect to the database when the function is initialized

// Create an Express app instance
const api = express();

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
