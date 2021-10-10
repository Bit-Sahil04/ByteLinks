const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth');

const { check } = require('express-validator');

router.get('/signon' , authController.getLogin);
// router.get('/logout' , authController.getLogin);

// todo: validation Reeeeeee

// router.post('/signon', authController.signOn);


module.exports = router;