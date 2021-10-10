const User = require("../models/user");
const { validationResult } = require('express-validator');


// work in progress

exports.getDashboard = (req, res, next) => {

    res.redirect('/signon');
}
