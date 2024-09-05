
//auth login
module.exports.login_get = ( req, res ) => {
    res.render('login');
};

//auth logout
module.exports.logout_get = ( req, res ) => {
    res.send('Logging out');
};

//auth with google
module.exports.google_login = ( req, res ) => {
    res.send('Redirected to Google');
};