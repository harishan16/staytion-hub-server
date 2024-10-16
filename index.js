import "dotenv/config";
import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5050;

app.use(cors());

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
