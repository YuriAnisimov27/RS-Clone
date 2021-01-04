const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');

const router = Router();

router.post('/register',
  [
    check('email', 'Invalid Email').isEmail(),
    check('password', 'Invalid Password: minimum password length 6 characters')
      .isLength({min: 6})
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid registration data'
        });
      }

      const {email, password} = req.body;
      const candidate = await User.findOne({email});
      // check for uniqueness of username
      if (candidate) {
        return res.status(400).json({message: 'User with this email already exists'});
      }

      const hashedPassword = await bcrypt.hash(password, 8);
      const user = new User({email, password: hashedPassword, isAdmin: false});
      await user.save();
      res.status(201).json({message: 'User created'});

    } catch (e) {
      res.status(500).json({message: 'Server Error. Try again...'});
    }
  });

router.post('/login',
  [
    check('email', 'Enter correct email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid login data'
        });
      }

      const {email, password} = req.body;
      const user = await User.findOne({email});
      if (!user) {
        return res.status(400).json({message: 'User not found'});
      }

      // password match check
      const isMatch = await bcrypt.compare(password, user['password']);
      if (!isMatch) {
        return res.status(400).json({message: 'Wrong password, try again'});
      }

      const token = jwt.sign(
        {userId: user['id']},
        config.get('coder'),
        {expiresIn: '2 days'}
      );

      // res.json({token, userId: user['id']});
      res.json({token, userId: user.id});

    } catch (e) {
      res.status(500).json({message: 'Server Error. Try again...'});
    }
  });

module.exports = router;
