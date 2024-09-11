const passport = require('passport');

//auth login
module.exports.login_get = ( req, res ) => {
    res.render('login', {user: req.user});
};

//auth logout
module.exports.logout_get = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err); 
        }
        res.redirect('/');
    });
};


//auth with google
module.exports.google_login = 
    passport.authenticate('google', {
        scope: ['profile']
    });


//google redirect
module.exports.google_redirect = [passport.authenticate('google'),(req, res) => {
    res.redirect('/profile');
}];