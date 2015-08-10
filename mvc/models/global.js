// sample static global base model
var model = {
  content: {
    appTitle: 'A New World'
  }
};

// extend global model provide additional useful vars at runtime and export it
module.exports = function(req, res) {

  // recalculated each require
  model.currentYear = new Date().getFullYear();
  model.mainDomain = req.headers['x-forwarded-host'] || req.headers.host;
  model.NODE_ENV = process.env.NODE_ENV;

  return model;
};