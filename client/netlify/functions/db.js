import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  // Check if the database is already connected to avoid reconnecting
  if (!isConnected) {
    try {
      const mongoURL =
        "mongodb+srv://ayumilky:7RoZQmixUN1SukOC@cluster0.qq7z815.mongodb.net/treeHotel?retryWrites=true&w=majority";
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
