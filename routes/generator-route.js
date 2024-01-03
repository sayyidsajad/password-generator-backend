const express = require("express");
const router = express.Router();
const generatorController = require("../controllers/generator-controller");

router.post("/", generatorController.passGen);

module.exports = router;
