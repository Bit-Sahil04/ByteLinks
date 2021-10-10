const express = require('express')
const router = express.Router();
const dashboardController = require('../controllers/dashboard');


router.get('/u/:username', dashboardController.getDashboard)



module.exports = router;