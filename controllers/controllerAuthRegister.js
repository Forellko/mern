const User = require('../models/User');
const bcrypt = require('bcryptjs');

const controllerAuthRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return res
        .status(400)
        .json({ __filename, message: 'User already exist' });
    }

    const hashedPassword = await bcrypt.hash(password, +process.env.SALT);
    const user = new User({ email, password: hashedPassword });

    await user.save();

    return res.status(201).json({ __filename, message: 'User created' });
  } catch (error) {
    console.log(__filename, error);
    return res.status(500).json({ __filename, error });
  }
};

module.exports = controllerAuthRegister;
