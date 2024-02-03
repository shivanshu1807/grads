const mongoose = require('mongoose');
const { Schema } = mongoose;
const EmployerSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phnno:{
        type : String,
        required : true
    },
    companyname:{
        type : String,
        required : true
    },
    pincode:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true,
    },
    date:{
        type : Date,
        default : Date.now
    },
});
const Employer = mongoose.model('user',EmployerSchema);
module.exports = Employer