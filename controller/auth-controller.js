const passport = require('passport');

//auth login
module.exports.login_get = ( req, res ) => {
    res.render('login');
};

//auth logout
module.exports.logout_get = ( req, res ) => {
    res.send('Logging out');
};

//auth with google
module.exports.google_login = 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    });


//google redirect
module.exports.google_redirect = [passport.authenticate('google'),(req, res) => {
    res.send('redirected to callback URI');
}];