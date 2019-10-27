const jwt = require('jsonwebtoken');
const index = (req,res, next) => {
  if (req.headers['authorization'] !== undefined) {
    let token = req.headers['authorization'].split(' ')[1]; //ambil token dari header 
    // biasanya bentukny : Bearer aieuhtsuhfnlajef (di awal ada bearer lalu token)
    //kita cuma ingin token doang, makanya pake split()[1]

    if(!token) //kalo tokennya ga ada
      return res.status(403).send({ status: 'error', auth: false, message: 'No token provided.' });

    //verifikasi jwtnya
    jwt.verify(token, process.env.SECRET_KEY, function (err,decoded) {
      if(err)
        return res.status(500).send({ status: 'error', auth: false, message: 'Invalid Token' });
      req.data = decoded;
      next();
    });
  } else{
    return res.status(403).send({ status : 'error', auth : false, message : 'No token provided.' });
  }
};

module.exports = index;
