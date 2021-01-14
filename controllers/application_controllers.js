const api_controller = require("./api_controllers");


exports.index = async function(req, res) {
  const event = await api_controller.getStudents();
  res.render('index', {events:event})
};

exports.report =  async function(req, res) {
  const event = await api_controller.getStudents();
  res.render('events/report', {events:event})
};

exports.admin = function(req, res) {
  res.render('events/admin');
};