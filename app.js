const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const session = require('express-session');

const app = express();


//setting view engine
app.set('view engine', 'ejs');


// Initialize express-session
app.use(session({
    secret: keys.session.cookieKey,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // Session cookie valid for 1 day
}));


//intialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoDB.dbURI)
.then((result) => {
    console.log('Connected to MongoDB');
})

//setting up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


//creating home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});



app.listen(3000, () => {
    console.log('Listening on the port 3000');
})