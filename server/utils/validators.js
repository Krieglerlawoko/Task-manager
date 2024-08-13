const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateUserRegistration,
    validate,
};
