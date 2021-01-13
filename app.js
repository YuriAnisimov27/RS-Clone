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
