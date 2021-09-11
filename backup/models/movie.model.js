const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true,
      index: true
  }, 
  hero:{
    type: Object
  },
  genres:{
    type: Array

  },

  time: {
    type: String
  },

  date: {
    type: Object
  },
  rating: {
    type: String  
  },
  episodes:{
   type:Object
  },
  Season:{
  type:String
  },
  SeasonData:{
  type:Array
  },
  ubdate:{
  type:String
  },
  Description: {
    type: String
  },
  poster: {
    type: String
  },
  Galary: {
    type: String
  },
  linkTraler: {
    type: String
  },
  traler: {
    type: Object
  },
  server: {
    type: Object
  },
  Related:{
  type:Object
  },
  type: {
    type: String
    },
  other: {
 type: Object
  }

}, {
  timestamps: true,
});

const movie = mongoose.model('movie', movieSchema);

module.exports = movie;