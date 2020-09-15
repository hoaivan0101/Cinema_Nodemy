const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Cinema_Nodemy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
  movieTitle: String,
  movieTitle_vn: String,
  movieRating: String,
  movieLength: Number,
  movieCountry: String,
  movieProceducer: String,
  movieGenre: String,
  movieDirector: String,
  movieActor: String,
  movieOpenDate: Date,
  moviePicture: String,
  movieTrailer: String,
  movieReview: String,
}, {
  collection: 'Movies',
});

const Accouts = mongoose.model('Movies', Users);
module.exports = Accouts;
