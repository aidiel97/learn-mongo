const mongoose = require('mongoose');
require('dotenv/config');
let db;

if(process.env.NODE_ENV==='development') db = process.env.DB_CONNECTION_DEV;
else db = process.env.DB_CONNECTION_PROD;

mongoose.Promise = global.Promise;
mongoose.connect(db,
  { 
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  
  }
).then(() => {
  console.log('DB connected');
}).catch(error => {
  console.log('error', error);
  process.exit();
});
