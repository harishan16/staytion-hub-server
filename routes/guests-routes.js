import express from "express";
import * as guestsController from "../controllers/guests-controller.js";
import { validateGuest } from "../middleware/validateGuest.js";
const router = express.Router();

router.route("/")
        .get(guestsController.index)
        .post(...validateGuest, guestsController.add);

export default router;