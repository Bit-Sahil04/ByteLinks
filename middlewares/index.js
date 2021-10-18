const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const session = require('express-session');

const localsConfig = require('./locals');
const homeRouter = require("../routes/home");
const authRouter = require("../routes/auth");
const dashboardRouter = require("../routes/dashboard");

// using bodyparser for url encoding instead of express 
// to allow for situational future compatibility in case express discards this feature again
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname + "/" + "../public")));
router.use(session({secret: process.env.SESSION_SECRET, saveUninitialized: false, resave: false}))

router.use(localsConfig.setupLocals);
router.use(authRouter);
router.use(dashboardRouter);
router.use(homeRouter);

module.exports = router;
