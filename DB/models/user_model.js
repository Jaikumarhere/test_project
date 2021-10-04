var mongoose = require('../connection');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email:String,
    name:String,
    username:{ type: String,required: true, index: { unique: true, sparse: true }},
    password:{ type: String,required: true, index: { unique: true, sparse: true }}
})