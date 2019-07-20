const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
// const fs = require("fs");
// const multer = require("multer");

const db = require('./models');
const routes = require('./routes');
const passport = require('./config/passport');
const corsOptions = require('./config/cors.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(session({ secret: 'TBD', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Requiring the `Book` & `Author` models for accessing these collections
// var Book = require("./book.js");
// var Author = require("./author.js");

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rabbitholedb", { useNewUrlParser: true });


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}

// Mongo Routes
//.

// Start the server
app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// Dynamically force schema refresh only for 'test'
// const FORCE_SCHEMA = process.env.NODE_ENV === 'test';

// db.sequelize
//   .authenticate()
//   .then(() => {
//     db.sequelize.sync({ force: FORCE_SCHEMA }).then(() => {
//       console.log(`🌎 ==> API server now on port ${PORT}!`); // eslint-disable-line no-console
//       app.emit('appStarted');
//     });
//   })
//   .catch(console.error); // eslint-disable-line no-console

// module.exports = app;
