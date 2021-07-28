const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const userSchema = new Schema({

    username : {type:String , required:true},
    password : {type:String, required : false},
    email:     {type:String,required:false},
    mobile:    {type:String,required:false },
    address: {type:String, required:false},
    homePhone:{type:String,required:false},
    marriedState:{type:String, required:false},
    dob:{type:Date,required:false},
    startDate:{type:Date, required:false},
    empType:{type:String, required:false},
    gender:{type:String, required:false},
    bank:{type:String,required:false},
    accountNo:{type:String,required:false},
    position:{type:String,required:false},
    qualification:{type:String,required:false},
    employeeImage:{type:String,required:false}

},{
    timestamps:true,
});
 

const User = mongoose.model('User',userSchema );

module.exports= User; 
