import mongoose from "mongoose";
import * as dotenv from "dotenv";
// dotenv.config();

let isConnected = false;

export const connectToDatabase = async (mongoURL) => {
  // Check if the database is already connected to avoid reconnecting
  if (!isConnected) {
    try {
      // const mongoURL = process.env.MONGO_URL;
      // console.log(mongoURL);
      await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      isConnected = true;
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }
};

export const disconnectFromDatabase = async () => {
  if (isConnected) {
    try {
      await mongoose.disconnect();
      isConnected = false;
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
    }
  }
};
