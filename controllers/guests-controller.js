import initKnex from "knex";
import configuration from "../knexfile.js";
import { matchedData } from "express-validator";
const knex = initKnex(configuration);

const index = async (req, res) => {
    try {
        const guests = await knex("guests");
        console.log(guests);

        if (guests.length === 0) {
            return res.status(404).json({
                message: "Guests data not found",
            });
        } else {
                res.status(200).json(guests);
        }

    } catch (error){
        res.status(500).json({
            message: "Unable to retrieve guests data",
          });
    }
}

const add = async (req, res, next) => {
    try {
        console.log(req);
        const newGuest = matchedData(req);

        const insertedID =
            await knex("guests")
                .insert(newGuest);

        res.status(201).send({
            id: insertedID[0],
            ...newGuest
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
	return next();
}

export { index, add };