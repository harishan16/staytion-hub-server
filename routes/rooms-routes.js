import express from "express";
import * as roomsController from "../controllers/rooms-controller.js";
// import { validateReservation } from "../middleware/validateReservation.js";
const router = express.Router();

router.route("/")
        .get(roomsController.index)

router.route("/:id")
        .get(roomsController.getRoomById)
        .patch(roomsController.update);

export default router;