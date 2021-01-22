const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json({extended: true}));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/admin', require('./routes/admin.routes'));
app.use(cors());

const PORT = config.get('port') || 5000;

// REST
let USERS = [
  {id: 1234, name: 'John', label: 'zeroth'},
  {id: 2468, name: 'Mary', label: 'first'},
  {id: 9876, name: 'Kate', label: 'second'}
];

app.get('/api/users', (req, res) => {
  res.status(200).json(USERS);
});

app.post('/api/users', (req, res) => {
  const user = {id: 1000, name: 'Pavel', label: 'third'};
  USERS.push(user);
  res.status(201).json(user);
});

app.delete('/api/users/:id', (req, res) => {
  USERS = USERS.filter(el => el.id !== req.params.id);
  res.status(200).json({message: 'User Removed'});
});

async function start() {
  try {
    await mongoose.connect(config.get('mongodb'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(PORT, () => console.log(`App has been started on port: ${PORT}...`));
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();

module.exports = app;
