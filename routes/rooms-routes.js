import express from "express";
import * as roomsController from "../controllers/rooms-controller.js";
// import { validateReservation } from "../middleware/validateReservation.js";
const router = express.Router();

router.route("/")
        .get(roomsController.index)

export default router;