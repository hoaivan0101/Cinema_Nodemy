const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Cinema_Nodemy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
  timeslotId: String,
  startTime: String,
  endTime: String,
  startDate: Date,
  endDate: Date,
  movieId: String,
  hallNum: Number,
}, {
  collection: 'TimeSlot',
});

const Accouts = mongoose.model('TimeSlot', Users);
module.exports = Accouts;
