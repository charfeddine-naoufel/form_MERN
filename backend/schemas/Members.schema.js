const mongoose = require('mongoose');
const deepPopulate= require('mongoose-deep-populate');

const MembersSchema = new mongoose.Schema({

    username:{type:String},
    password:{type:String},
    fullname:{type:String},
    gender:{type:String},
    db:{type:Date},
    isVisible:{type:Boolean , default: true},
    createdAt:{type:Date},

});

const population= [];

const Members = mongoose.model('Members',MembersSchema,'Members');
module.exports = Members