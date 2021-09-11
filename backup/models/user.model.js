const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  accessToken: {
    type: String,
  },
  idAcount:{
    type:String
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  social: {
    type: String,
  },
  myList:{
    type:Array
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;