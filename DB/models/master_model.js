var mongoose = require('../connection');

var Schema = mongoose.Schema;

var masterschema = new Schema({
        productNmae:String,
        image:String,
        cpu:String,
        ram:String,
        storage:String,
        screen:String,
        price:String,
        description:String
})