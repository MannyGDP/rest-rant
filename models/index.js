const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParaser: true,
    useUnifiedTopology: trusted,
});

module.exports.Place = require('./places');