module.exports = function(app) {
  app.route('/').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = '{content.appTitle} - World Map';
    model.teddyPath1 = '/images/land.png';
    model.teddyPath2 = '/images/hero.gif';
    res.render('homepage', model);
  });
};