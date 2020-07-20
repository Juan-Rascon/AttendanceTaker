const express = require("express");
const router  = express.Router();
const application_controller = require("../controllers/application_controllers");

router.get("/", application_controller.index);

router.get("/overview", application_controller.overview);

router.get("/events", application_controller.events);

router.get("/registerEvents", application_controller.registerEvents);

module.exports = router;