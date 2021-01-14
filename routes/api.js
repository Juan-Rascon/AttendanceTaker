const express = require('express');
const router = express.Router();
const api_controller = require("../controllers/api_controllers");

// TODO: Add a router redirect
// Make calls to the database

router.get("/report", api_controller.getStudents);

router.post("/report", api_controller.addEvent);

router.put("/report/:id", api_controller.updateEvent);

router.delete("/report/:id", api_controller.deleteEvent);

module.exports = router;