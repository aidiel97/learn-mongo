const bcrypt = require('bcrypt');
const responses = require('../responses');
const User = require('../models/user');
const jwt = require('../utils');

module.exports = {
  register : async (req,res) => {
    let data = req.body;
    //untk replace nilai password yang didapat, diencrypt terlebih dahulu
    data.password = bcrypt.hashSync(data.password, 10);
    const user = new User(data);

    try{
      const insert = await user.save();
      responses.success(insert, res);
    }catch (err) {
      res.status(401).json({
        err : err
      });
    }
  },
  login : async (req, res) => {
    let data = req.body;

    try{
      let user_login = await User.findOne( { username : data.username }).exec();

      //membuat antisipasi jika user belum mendaftar (data ga ada)
      if(user_login !== null){
        let jwt_data = {
          _id : user_login._id,
          fullname : user_login.fullname,
          email : user_login.email
        };

        //verifikasi password, diperiksa apakah pass input == pass dari database
        if(bcrypt.compareSync(data.password, user_login.password)) {
          let exp = Math.floor(Date.now() / 1000) + (60*60); 
          //60*60 artinya expirednya satu jam (60 detik *60 menit)
          let jwt_result = await jwt.generate_token(jwt_data, exp, 'https://example.com');
          //kirim parameter ke util/index.js

          //handle response jika login berhasil sama aja dengan responses.success 
          res.json({
            status : 'success',
            message : 'Authentication Successful',
            token : jwt_result,
            error : null
          });
        } else {
          responses.error('password doesnt match!', res);
        } 

      }else{
        responses.error('Anda bleum mendaftar', res);
      }
    }catch(err){
      responses.error(String(err), res);
    }
  }
};
