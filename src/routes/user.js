module.exports = function(app) {
  let user = require('../controllers/user');
  // test api

  app.route(`/register`)
    .post(user.register); //tambah data user, data yg ditambahkan ada pada "body" postman

  app.route(`/login`)
    .post(user.login);
};
