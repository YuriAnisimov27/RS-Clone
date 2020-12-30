const bcrypt = require('bcryptjs');
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

      const {email, password} = req.body;
      const candidate = await User.findOne({email});
      if (candidate) {
        return res.status(400).json({message: 'User with this email already exists'});
      }

      const hashedPassword = await bcrypt.hash(password, 8);
      const user = new User({email, password: hashedPassword});
      await user.save();

      res.status(201).json({message: 'User created'});

    } catch (e) {
      res.status(500).json({message: 'Server Error. Try again...'});
    }
  });

router.post('/login', async (req, res) => {

});

module.exports = router;
