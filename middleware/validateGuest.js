import { check, validationResult } from 'express-validator';

export const validateGuest = [
    check('guest_name').notEmpty().withMessage('Guest name is required'),
    check('contact_number').matches(/^\+1\(\d{3}\)-\d{3}-\d{4}$/).withMessage('Invalid contact number format'),
    check('contact_email').isEmail().withMessage('Invalid email format'),
    check('address').notEmpty().withMessage('Address is required'),
    check('city').notEmpty().withMessage('City is required'),
    check('country').notEmpty().withMessage('Country is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];