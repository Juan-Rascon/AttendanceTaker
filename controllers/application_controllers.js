const api_controller = require("./api_controllers");

exports.index = function(req, res) {
  res.render('index');
};

exports.overview = async function(req, res) {
  const event = await api_controller.getEvent();
  res.render('events/overview', {events:event})
};

exports.events =  async function(req, res) {
  const event = await api_controller.getEvent();
  res.render('events/events', {events:event})
};

exports.registerEvents = function(req, res) {
  res.render('events/registerEvents');
};