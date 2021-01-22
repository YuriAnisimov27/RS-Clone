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
let CONTACTS = [
  {id: 1234, name: 'John', value: 'zeroth', marked: false},
  {id: 2468, name: 'Mary', value: 'first', marked: false},
  {id: 9876, name: 'Kate', value: 'second', marked: true}
];

app.get('/api/contacts', (req, res) => {
  res.status(200).json(CONTACTS);
});

app.post('/api/contacts', (req, res) => {
  const contact = {id: 1000, name: 'Pavel', value: 'third', marked: false};
  CONTACTS.push(contact);
  res.status(201).json(contact);
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
