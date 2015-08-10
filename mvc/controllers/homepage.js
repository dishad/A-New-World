module.exports = function(app) {
  app.route('/').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = '{content.appTitle} - World Map';
    model.teddyPath = '/images/worldMap.jpg';
    res.render('homepage', model);
  });
};