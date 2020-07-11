exports.index = function(req, res) {
  res.render('index');
};

exports.overview = function(req, res) {
  res.render('events/overview');
};

exports.events = function(req, res) {
  res.render('events/events');
};

exports.registerEvents = function(req, res) {
  res.render('events/registerEvents');
};