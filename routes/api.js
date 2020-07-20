const express = require('express');
const router = express.Router();
const api_controller = require("../controllers/api_controllers");

// TODO: Add a router redirect
// Make calls to the database

router.get("/events", api_controller.getEvent);

router.post("/events", api_controller.addEvent);

router.put("/events/:id", api_controller.updateEvent);

router.delete("/events/:id", api_controller.deleteEvent);

module.exports = router;