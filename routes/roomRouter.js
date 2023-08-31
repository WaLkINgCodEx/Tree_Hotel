import { Router } from "express";
import { createRoom, getAllRooms } from "../controllers/roomController.js";

const roomRouter = Router();

roomRouter.route("/").post(createRoom).get(getAllRooms);

export default roomRouter;
