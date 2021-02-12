const { check, validationResult } = require('express-validator');

const checkInputs = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    console.log(__filename, error);
    return res.status(400).json({ __filename, error });
  }

  next();
};

module.exports = [
  check('email', 'bad email').isEmail(),
  check('password', 'too low').isLength({ min: 6 }),
  checkInputs,
];
