import "dotenv/config";
import express from "express";
import cors from 'cors';
import reservationsRoutes from "./routes/reservations-routes.js";
import roomsRoutes from "./routes/rooms-routes.js";
import guestsRoutes from "./routes/guests-routes.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5050;

app.use(cors());

app.use("/api/reservations", reservationsRoutes);
app.use("/api/guests", guestsRoutes);
app.use("/api/rooms", roomsRoutes);

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
