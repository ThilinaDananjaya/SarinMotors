const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const ShipperSchema = new Schema({

    shipperId:{
        type : String,
        required :true,
        unique:true,
        trim:true,
                                    
    },
    shipperName:{
        type:String,
        required:true,
        unique:true,

    },
},{
    timestamps:true, 
});

 

const Shipper = mongoose.model('Shipper', ShipperSchema);

module.exports= Shipper;