const express = require('express');
const config = require('config');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
//
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

const PORT = config.get('port') || 5000;

app.listen(PORT, () => {
  console.log(`App has been started on port: ${PORT}...`);
});

module.exports = app;
