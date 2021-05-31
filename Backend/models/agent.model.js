const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const AgentSchema = new Schema({

    agentId:{
        type : String,
        required :true,
        unique:true,
        trim:true,
    
    },
    agentName:{
        type:String,
        required:true,
        unique:true,

    },
},{
    timestamps:true, 
});

 

const Agent = mongoose.model('Agent', AgentSchema);

module.exports= Agent;