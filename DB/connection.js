const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:Mykeyin123@cluster0.iog4a.mongodb.net/laptop_store?retryWrites=true&w=majority";

let db = mongoose.connection;

db.on('error',console.error.bind(console, 'Connection Error : '));

db.once('open',function(){
    console.log('Connection ok!');
})

module.exports = mongoose;