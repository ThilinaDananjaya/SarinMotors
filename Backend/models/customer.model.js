const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({

      username:{ type : String, required :true},
      password:{type:String , required:true},
      email:{type:String , required:true},
      mobile:{type:Number , required:true},
      dob: {type:Date, required :true},
    
},{
    timestamps:true,
});



const Customer = mongoose.model('Customer', customerSchema);

module.exports= Customer; 