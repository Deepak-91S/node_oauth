const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const userModel = require('../models/user-model');


passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser((id, done) => {

    userModel.findById(id).then(user => {
        done(null, user);
    })

});


passport.use(new GoogleStrategy({
    // options for google strategy    
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect' 
}, (accessToken, refreshToken, profile, done) => {
    //passport callback func
    console.log(profile);
    //check if user already exists in collection
    userModel.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
            console.log("The current user is:", currentUser);
            done(null, currentUser);
        }else{
            new userModel({
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile.photos[0] ? profile.photos[0].value : null
            }).save().then((newUser) => {
                console.log("The newly created user is:",newUser);
                done(null, newUser);

            });
        }
    })
    
    // done(null, profile);
})
);

