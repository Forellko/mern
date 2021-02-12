const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const controllerAuthLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      console.log({ __filename, error: 'Wrong user' });
      return res
        .status(400)
        .json({ __filename, message: 'Wrong user or password' });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      console.log({ __filename, error: 'Wrong password' });
      return res
        .status(400)
        .json({ __filename, error: 'Wrong user or password' });
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.SECRET,
      {
        expiresIn: process.env.ACCESS_TIME,
      }
    );

    return res.status(200).json({ token, userId: user.id });
  } catch (error) {
    console.log(__filename, error);
    return res.status(500).json({ __filename, error });
  }
};

module.exports = controllerAuthLogin;
