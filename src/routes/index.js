module.exports = function(app) {
  let index = require('../controllers');
  let middleware = require('../midleware');
  // test api

  app.route('/').get(index.index); //hello world <lihat di controller>
  app.route('/post').get(index.getpost); //getALL karena pake find() tanpa parameter ape ape
  app.route('/post/:id').get(index.getonepost); //getALL karena pake find() tanpa parameter ape ape

  app.route(`/post`)
    .post(middleware, index.addpost); //midleware itu manggil fungsi pengecekan token ada atau nggak
  //tambah data, data yg ditambahkan ada pada "body" postman

  app.route(`/post/:id`)
    .patch(index.updatepost); 
  //yang di postman sesuaikan sama ini = patch biasanya update pake put/patch

  app.route(`/post/:id`)
    .delete(index.deletepost); //yang di postman sesuaikan sama ini = delete
};
