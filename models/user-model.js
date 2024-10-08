const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username: String,
    googleId: String,
    thumbnail: String
});

const User = mongoose.model('user', Schema);

module.exports = User;