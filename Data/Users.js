const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Cinema_Nodemy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
  userId: String,
  userName: String,
  userPassword: String,
  userEmail: String,
  userType: String,
  userDate: Date,
  userMobile: String,
  userPoint: Number,
  userCart:Array,
}, {
  collection: 'Users',
});

const Accouts = mongoose.model('Users', Users);
module.exports = Accouts;
