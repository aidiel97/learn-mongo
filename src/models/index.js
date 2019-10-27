const mongoose = require('mongoose');

//schema, kalo di rdbms itu macem dekskripsi dari kolom2nya, ini biasanya ada di "body" postman
//cari aja di mongoose Schemas untuk tau key-key apa aja yg bisa dipake
const post = mongoose.Schema({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  author : {
    type : String,
    default : null
  },
  images : {
    type : String,
    default : null
  },
  date : {
    type : Date,
    default : Date.now //dinamis, langsung ambil tanggal saat ini
  }
});

module.exports = mongoose.model('post', post);
