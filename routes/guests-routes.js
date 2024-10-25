import express from "express";
import * as guestsController from "../controllers/guests-controller.js";
// import { validateReservation } from "../middleware/validateReservation.js";
const router = express.Router();

router.route("/")
        .get(guestsController.index)

router.route("/getGuestNames")
	.get(guestsController.getGuestNames);

export default router;