const User = require("../models/user");
const { validationResult } = require('express-validator');


// work in progress

exports.getLogin = (req, res, next) => {

    res.render('signon', 
    
        //{ params}
    );
};


exports.postCredentials = (req, res, next) => {
    res.redirect('/signon');

    if (!!req.body.login)
        console.log("logged in");
    else
        console.log("registered");
};