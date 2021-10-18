const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth');

const { check } = require('express-validator');

router.get('/signon' , authController.getLogin);
router.get('/logout' , authController.getLogout);

// todo: validation Reeeeeee

router.post('/login', authController.postLogin);

router.post('/register', authController.postRegister);


module.exports = router;