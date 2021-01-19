const express = require('express');
const router = express.Router();
const api_controller = require("../controllers/api_controllers");

// TODO: Add a router redirect
// Make calls to the database

router.post("/students/:section/:id", api_controller.markPresent);

router.put("/students/:section/:id", api_controller.undoMarkPresent);

router.post("/enroll", api_controller.enroll);

module.exports = router