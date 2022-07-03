const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://newuser:12345@cluster0.xk3sw.mongodb.net/crud?retryWrites=true&w=majority');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/tasks', require('./routes/tasks'));

// static
app.use(express.static(path.join(__dirname, 'public')));;

// listenning on port
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
