// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

var Article = require('./models/Article');

// Create Instance of Express
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// Set up Mongoose
mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost/nytreact', {
    useMongoClient: true
});

db
.then(function (db) {
    console.log('mongodb has been connected');
})
.catch(function (err) {
    console.log('error while trying to connect with mongodb');
});
// -------------------------------------------------


// Get saved articles
app.get('/api/saved', function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({})
  .exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Save an article
app.post('/api/saved', function(req, res) {

  Article.create(req.body, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Delete an article
app.delete('/api/saved', function(req, res) {
  var url = req.param('url');

  Article.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
})

// All non-API get routes
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


// -------------------------------------------------

// Listener
app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
