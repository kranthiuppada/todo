const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL =process.env.MONGO_URL;

mongoose.connect(DB_URL)
    .then(() => {
        console.log('MongoDB is Connected...');
    }).catch((err) => {
        console.log('MongoDB Conn Error...', err);
    })