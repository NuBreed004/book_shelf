const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

mongoose.Promise = global.Promise;
mongoose.connect()

const app = express();

const port = process.env.PORT || 3001;
app.listen(port, ()=> {
  console.log('Server is Running');
})
