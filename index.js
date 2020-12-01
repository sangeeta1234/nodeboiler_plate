"use strict"
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
require("./app_globals.js");

//app.use(require('./app/routers/locus.router'));
app.use(require('./app/routers/locus.router'));

app.listen(process.env.NODE_PORT, () => {
    console.log('Node is running on port ' + process.env.NODE_PORT);
})