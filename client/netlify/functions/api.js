import express from "express";
import serverless from "serverless-http";
import { router } from "./roomController"; // Import the Express Router
import { connectToDatabase, disconnectFromDatabase } from "./db"; // Import the database connection function

// Connect to the database when the function is initialized

// Create an Express app instance
const api = express();

// Use the roomsRouter for the /api2/ route
api.use("/api/v1/", router);

// Define the Netlify function handler
export const handler = async (event, context) => {
  await connectToDatabase();
  const result = await serverless(api)(event, context);

  // Disconnect from the database after the request is done
  await disconnectFromDatabase();

  return result;
};
