var db = require("../models");

exports.addEvent = function(req, res) {
  db.registeredEvents.create(req.body).then(function(dbregisteredEvents) {
  res.render("events/registerEvents", {submitted: true})});
};

exports.deleteEvent = async function(req, res) {
  await db.registeredEvents.destroy(
    {where: {
      id: req.params.id
    }
    })
};

exports.getEvent = async function(req, res) {
  const event = await db.registeredEvents.findAll({
      attributes: ['id','eventName','eventCount'],
      raw: true})
  return event;
};

exports.updateEvent = async function(req, res) {
  const event = await db.registeredEvents.findOne(
    {where: {
      id: req.params.id
    }
  });
  await event.increment("eventCount");
};
