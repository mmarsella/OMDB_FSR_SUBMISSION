var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

});

var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;