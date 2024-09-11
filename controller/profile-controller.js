

//profile user
module.exports.user_profile = ( req, res ) => {
    res.render('profile', {user: req.user});    
};