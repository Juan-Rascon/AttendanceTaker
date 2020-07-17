var db = require("../models");

exports.addEvent = function(req, res) {
  db.registeredEvents.create(req.body).then(function(dbregisteredEvents) {
  res.render("events/registerEvents", {submitted: true})});
};

exports.deleteEvent = function(req, res) {
  db.registeredEvents.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbregisteredEvents) {
    res.json(dbregisteredEvents);
  });
};

exports.getEvent = async function(req, res) {
  const events = await db.registeredEvents.findAll({
        attributes: ['id','eventName','eventCount']
  });
  return (JSON.stringify(events));
};

exports.updateEvent =  function(req, res) {
  db.registeredEvents.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Post]
  }).then(function(dbregisteredEvents) {
    res.json(dbregisteredEvents);
  });
};
