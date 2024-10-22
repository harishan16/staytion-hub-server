import initKnex from "knex";
import configuration from "../knexfile.js";
// import { matchedData } from "express-validator";
const knex = initKnex(configuration);

const index = async (req, res) => {
    try {
        const reservationsList = await knex("reservations");

        if (reservationsList.length === 0) {
            return res.status(404).json({
                message: "Reservations list not found",
            });
        } else {
                res.status(200).json(reservationsList);
        }

    } catch (error){
        res.status(500).json({
            message: "Unable to retrieve reservations list",
          });
    }
}

const viewDetail = async (req, res) => {
    try {
        console.log(req);

    } catch (error) {
        res.status(500).json ({
            message: `Unable to retrieve details of reservation ${id}`
        })

    }
}

export { index, viewDetail };
