const mongoose = require("mongoose");


const Userschema = mongoose.Schema({

    name :  { 
        type: String,
        required :true,
       
    },

    lastname :{
      type:String,
      required:true 
    },
    age:  { 
        type: Number,
        required :true,
    },


     email :  { 
        type: String,
        required :true,
        unique : true,
    },



});

module.exports = Person = mongoose.model("User" , Userschema)