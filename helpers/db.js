const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:123@ds111608.mlab.com:11608/movie-api',{useMongoClient : true});
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};