const express = require('express')
const router = express.Router();
const homeController = require('../controllers/home');
const { check } = require('express-validator');

router.get('/delete-link/:shortUrl', homeController.deleteUrl)
router.post('/submit', check('userUrl').isURL().withMessage("Invalid URL!"), homeController.postUrl);


router.get('/:shortUrl', homeController.redirect)
router.get('/', homeController.getIndex);


module.exports = router;