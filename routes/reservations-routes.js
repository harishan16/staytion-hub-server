import express from "express";
import * as reservationsController from "../controllers/reservations-controller.js";
import { validateReservation } from "../middleware/validateReservation.js";
const router = express.Router();


router.route("/")
        .get(reservationsController.index)
        .post(...validateReservation, reservationsController.add);

router.route("/:id")
        .get(reservationsController.getReservationById);

export default router;