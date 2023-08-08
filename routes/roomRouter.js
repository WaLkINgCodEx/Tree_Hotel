import { Router } from "express";

const router = Router();

import { createRoom } from "../controllers/roomController.js";

router.route("/").post(createRoom);

export default router;
