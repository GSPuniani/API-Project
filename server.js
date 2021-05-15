require('dotenv').config();

const express = require('express');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator());
app.use(cookieParser());

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);


// Routes
// app.get('/', (req,res) => {
//   res.send('Splash page')
// })

app.get('/posts/new', (req, res) => {
  // Render the new-posts view
  res.render('posts-new');
})

// Connect to database
require('./data/db');

// Controllers
require('./controllers/query.js')


app.listen(process.env.PORT || 3000);

module.exports = app;
