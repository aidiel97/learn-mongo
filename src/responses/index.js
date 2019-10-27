'user strict';

exports.success = function (value, res){
  let data = {
    'status' : 'success',
    'data' : value,
    'error' : null,
  };
  res.status(200).json(data);
  res.end();
};

exports.error = function (value, res){
  let data = {
    'status' : 'error',
    'data' : value,
    'error' : null,
  };
  res.status(403).json(data);
  res.end();
};
