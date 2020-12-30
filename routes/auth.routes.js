const {Router} = require('express');
const User = require('../models/User');

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const {email, password} = req.body;


  } catch (e) {
    res.status(500).json({message: 'Server Error. Try again...'});
  }
});

router.post('/login', async (req, res) => {

});

module.exports = router;
