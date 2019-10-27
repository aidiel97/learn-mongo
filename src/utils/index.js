//modul untuk convert data hasil login menjadi token dalam file terpisah dengan jwt
const jwt = require('jsonwebtoken');

module.exports = {
  generate_token : async (data, exp, iss=null) => {
    //PARAMETER INI MENANDAKAN DATA-DATA YANG AKAN DI BAWA SAAT SELESAI LOGIN
    return jwt.sign({
      iss : iss,
      exp : exp,
      data : data
    }, process.env.SECRET_KEY, { algorithm : process.env.JWT_ALGORITHM });
    //default ikutin aeea, nilai di dapat dari .env
  }
};
