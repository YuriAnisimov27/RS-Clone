const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json({extended: true}));
app.use('/api/auth', require('./routes/auth.routes'));
app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '/api/users');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');

  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
});

const PORT = config.get('port') || 5000;

let USERS = [
  {id: '1234', name: 'John', label: 'zeroth'},
  {id: '2468', name: 'Mary', label: 'first'},
  {id: '9876', name: 'Kate', label: 'second'}
];

app.get('/api/users', (req, res) => {
  res.status(200).json(USERS);
});

app.post('/api/users', (req, res) => {
  const candidate = USERS.find(c => c.id === '1000');
  if (candidate) {
    return res.status(400).json({message: 'User with this id already exists'});
  }
  const user = {id: '1000', name: 'Pavel', label: 'third'};
  USERS.push(user);
  res.status(201).json(user);
});

app.put('/api/users', (req, res) => {
  const user = {id: '1000', name: 'Pavel', label: 'third'};
  USERS.push(user);
  res.status(201).json(user);
});

app.delete('/api/users/:id', (req, res) => {
  USERS = USERS.filter(user => user.id !== req.params.id);
  res.status(200).json({message: 'User Removed'});
});

app.patch('/api/users/:id', (req, res) => {
  let user = USERS.find(c => c.id === req.params.id);
  user = {...user, label: 'BOSS'};
  USERS = [...USERS.filter(user => user.id !== req.params.id), user];
  res.status(200).json({message: 'Add admin status for selected user'});
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
