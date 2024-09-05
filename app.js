const express = require('express');

const app = express();


//setting view engine
app.set('view engine', 'ejs');


//creating home route
app.get('/', (req, res) => {
    res.render('home');
});



app.listen(3000, () => {
    console.log('Listening on the port 3000');
})