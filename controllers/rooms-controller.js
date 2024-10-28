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

const getRoomById = async (req, res) => {
    const { id } = req.params;
    try {
        const details = await knex("rooms").where({ id }).first();
        console.log(details);

        if (!details) {
            return res.status(404).json({
                message: "Room data not found",
            });
        } else {
                res.status(200).json(details);
        }

    } catch (error){
        res.status(500).json({
            message: `Unable to retrieve room data for ID ${id}`,
          });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updateStatus = await knex("rooms").where( { id }).update({ status, updated_at: knex.fn.now() });

        if (updateStatus === 0) {
            return res.status(404).json({ message: 'Room not found' });
        }

        const updateRoom = await knex('rooms').where( { id }).first();

        return res.status(200).json(updateRoom);
    } catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export { index, getRoomById, update };