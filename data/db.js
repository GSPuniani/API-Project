// DONE: Set up your Mongoose connection here.
const mongoose = require('mongoose')
const assert = require('assert')

const url = "mongodb+srv://admin:wawnum-zaqwyx-Kanhu5@customapi.vpoac.mongodb.net/f1-db?retryWrites=true&w=majority"

mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  },
  function(err, db) {
    assert.equal(null, err);
    console.log(`Connected to ${url}`);

    // db.close(); turn on for testing
  }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
