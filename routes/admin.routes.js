const config = require('express');
const { Router } = require('express');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');


const router = Router();

router.get('/users', async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Error'
      });
    }
    const users = await User.find();
    res.status(202)
    res.send(users);
  } catch (e) {
    res.status(500).json({ message: 'Server Error. Try again...' });
  }
});

router.delete(`/users/:email`, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Error'
      });
    }
    const email = "user email";
    const user = await User.findOne({ email });
    res.status(200);
    user.remove();
    console.log(`user with email ${email} has been deleted`);
  } catch (e) {
    res.status(500).json({ message: 'Server Error. Try again...' });
  }
});

router.put(`/users/:email`, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Error'
      });
    }
    const email = 'putcheck@putchek.put';
    const user = await User.findOne({ email });
    user.isAdmin = true;
    user.save();
    res.status(202);
    console.log(`user ${email} is admin now`)
  } catch (e) {
    res.status(500).json({ message: 'Server Error. Try again...' });
  }
});

module.exports = router;