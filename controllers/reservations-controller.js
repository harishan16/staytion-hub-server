import initKnex from "knex";
import configuration from "../knexfile.js";
import { matchedData } from "express-validator";
const knex = initKnex(configuration);

const index = async (req, res) => {
    try {
        const reservationsList = await knex("reservations");
        console.log(reservationsList);

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

//findOne = get one  //http://localhost:5050/api/reservations/1

const getReservationById = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const details = await knex("reservations").where({ id }).first();
        console.log(details);

        if (!details) {
            return res.status(404).json({
              message: "Reservation not found",
            });
          }
  
          const reservationDetails = details;
          res.json(reservationDetails);

    } catch (error) {
        res.status(500).json ({
            message: `Unable to retrieve details of reservation ${id}`
        })

    }
}


// POST
const add = async (req, res, next) => {
    try {
        console.log(req);
        const newReservation = matchedData(req);

        const insertedID =
            await knex("reservations")
                .insert(newReservation);

        res.status(201).send({
            id: insertedID[0],
            ...newReservation
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
	return next();
}

export { index, getReservationById, add };
