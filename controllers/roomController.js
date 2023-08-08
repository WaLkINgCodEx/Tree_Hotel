import Room from "../models/roomModel.js";

import mongoose from "mongoose";

export const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json({ room });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
