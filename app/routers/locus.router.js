"use strict"

const express = require('express');
const router = new express.Router();
const locus = require("../controller/locus/locus.controller");
module.exports = router;
router.post('/locus/v3/funtest', [locus.funtest], locus.funtest);

