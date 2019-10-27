const mongoose = require('mongoose');

//schema, kalo di rdbms itu macem dekskripsi dari kolom2nya, ini biasanya ada di "body" postman
//cari aja di mongoose Schemas untuk tau key-key apa aja yg bisa dipake
const user = mongoose.Schema({
  username : {
    type : String,
    required : true,
    unique : true
  },
  fullname : {
    type : String,
    required : true
  },
  password : {
    type :  String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  phone : {
    type : String,
    required : true
  },
  date : {
    type : Date,
    default : Date.now //dinamis, langsung ambil tanggal saat ini
  }
});

module.exports = mongoose.model('user', user);
