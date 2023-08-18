import { Router } from "express";

const router = Router();

import { createRoom, getAllRooms } from "../controllers/roomController.js";

router.route("/").post(createRoom).get(getAllRooms);

export default router;
