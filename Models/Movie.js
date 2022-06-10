var mongoose = require('mongoose');

var movieSch = mongoose.Schema({
    name: String,
    rating: Number
})

module.exports = mongoose.model("movies", movieSch);