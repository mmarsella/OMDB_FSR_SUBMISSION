var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/moviedb");
mongoose.set('debug',true);
module.exports.movie = require("./movie");