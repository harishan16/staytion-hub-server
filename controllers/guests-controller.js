import initKnex from "knex";
import configuration from "../knexfile.js";
// import { matchedData } from "express-validator";
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

const getGuestNames = async (req, res) => { 
    try {
        const guestNames = await knex('guests')
            .select('guest_name');
        
        return res.status(200).json(guestNames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching guest names" });
    }
  }

export { index, getGuestNames };