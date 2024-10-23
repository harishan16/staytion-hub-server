import initKnex from "knex";
import configuration from "../knexfile.js";
// import { matchedData } from "express-validator";
const knex = initKnex(configuration);

const index = async (req, res) => {
    try {
        const rooms = await knex("rooms");
        console.log(rooms);

        if (rooms.length === 0) {
            return res.status(404).json({
                message: "Rooms data not found",
            });
        } else {
                res.status(200).json(rooms);
        }

    } catch (error){
        res.status(500).json({
            message: "Unable to retrieve rooms data",
          });
    }
}

export { index };