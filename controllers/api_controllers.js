var db = require("../models");

exports.addEvent = function(req, res) {
  db.Students.create(req.body).then(function(dbregisteredEvents) {
  res.render("report/admin", {submitted: true})});
};

exports.deleteEvent = async function(req, res) {
  await db.Students.destroy(
    {where: {
      id: req.params.id
    }
    })
};

exports.getStudents = async function(req, res) {
  const event = await db.Students.findAll({
      attributes: ['id','firstName','lastName'],
      raw: true})
  return event;
};

exports.updateEvent = async function(req, res) {
  const event = await db.Students.findOne(
    {where: {
      id: req.params.id
    }
  });
  await event.increment("eventCount");
};
