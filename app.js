const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();


//setting view engine
app.set('view engine', 'ejs');

//setting up routes
app.use('/auth', authRoutes);


//creating home route
app.get('/', (req, res) => {
    res.render('home');
});



app.listen(3000, () => {
    console.log('Listening on the port 3000');
})