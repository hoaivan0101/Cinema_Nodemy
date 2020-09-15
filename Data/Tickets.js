const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Cinema_Nodemy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
  ticketId: String,
  hallNum: Number,
  seatNum: Number,
  movieId: String,
  timeslotId: String,
  userId: String,
  price: Number,
}, {
  collection: 'Tickets',
});

const Accouts = mongoose.model('Tickets', Users);
module.exports = Accouts;
