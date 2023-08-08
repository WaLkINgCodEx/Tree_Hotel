import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";

import roomRouter from "./routes/roomRouter.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/rooms", roomRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
