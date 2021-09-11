const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReserveSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true,
      minlength: 1,
      index: true
  }, 
  hero:{
    type: Object,
      minlength: 1
  },
  genres:{
    type: Array,
    minlength: 1
  },

  time: {
    type: String,
      minlength: 1
  },

  date: {
    type: Object,
      minlength: 1
  },
  rating: {
    type: String  ,
      minlength: 1
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
    type: String,
      minlength: 1
  },
  poster: {
    type: String,
      minlength: 1
  },
  Galary: {
    type: String,
      minlength: 1
  },
  linkTraler: {
    type: String,
      minlength: 1
  },
  traler: {
    type: Object,
      minlength: 1
  },
  server: {
    type: Object,
      minlength: 1
  },
  Related:{
  type:Object
  },
  otherNames: {
    type: String,
    },
  originalLink: {
    type: String,
    },
    nameDownlod: {
        type: String,
        },
  type: {
    type: String,
    },
    other: {
      type: Object,
      }
   

 

}, {
  timestamps: true,
});

const Reserve = mongoose.model('Reserve', ReserveSchema);

module.exports = Reserve;