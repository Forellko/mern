const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');
const router = Router();

router.post(
  '/register',
  [
    check('email', 'Indvalid email').isEmail(),
    check('password', 'Invalid password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty())
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid registration inputs',
        });

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate)
        return res.status(400).json({ message: 'User already exist' });

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'User created' });
    } catch (error) {
      res.status(500).json({ message: 'wrong /register' });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Indvalid email').isEmail(),
    check('password', 'Invalid password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty())
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid registration inputs',
        });

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) return res.status(400).json({ message: 'User not find' });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return res.status(400).json({ message: 'Invalid password' });

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json({ token, userId: user.id });
    } catch (error) {
      res.status(500).json({ message: 'wrong /login' });
    }
  }
);

module.exports = router;
