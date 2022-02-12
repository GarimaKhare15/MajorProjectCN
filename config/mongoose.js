const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codieal_develpoment');

const db = mongoose.connection;

db.on('error',console.error.bind('Error connecting to MongoDB'));

db.once('open',function(){
    console.log('Successfuly connected to MongoDB!');
})

module.exports = db;