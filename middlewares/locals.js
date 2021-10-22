const alerts = {
    error: 'f44336',
    success: '04AA6D;',
    info: '2196F3',
    warning: 'ff9800',
}


exports.setupLocals =  (req, res, next) => {
    res.locals.isAuthenticated = req.session.isAuthenticated;
    res.alertType = alerts;
    res.locals.alert = undefined
    // res.locals.csrfToken = req.csrfToken();
    next();
}