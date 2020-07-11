const express = require('express');
const router = express.Router();

const api_controller = require("../controllers/api_controllers");

// TODO: Add a router redirect
// Make calls to the database

router.get("/events", api_controller.index);

router.post("/events", api_controller.index);

router.put("/events", api_controller.index);

router.delete("/events", api_controller.index);

module.exports = router;