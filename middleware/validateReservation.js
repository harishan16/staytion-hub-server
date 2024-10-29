import { check, validationResult } from 'express-validator';

export const validateReservation = [
    check('guest_name').notEmpty().withMessage('Guest name is required'),
    check('no_of_guests').isInt({ min: 1 }).withMessage('Number of guests must be at least 1'),
    check('room_type').notEmpty().withMessage('Room type is required'),
    check('room_number').notEmpty().withMessage('Room number is required'),
    check('room_id').notEmpty().withMessage('Room ID is required'),
    check('guest_id').notEmpty().withMessage('Guest ID is required'),
    check('check_in').isISO8601().withMessage('Check-in date is required'),
    check('check_out').isISO8601().withMessage('Check-out date is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];