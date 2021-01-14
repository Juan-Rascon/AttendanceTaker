const express = require("express");
const router  = express.Router();
const application_controller = require("../controllers/application_controllers");


router.get("/", application_controller.index);

router.get("/report", application_controller.report);

router.get("/admin", application_controller.admin);

module.exports = router;