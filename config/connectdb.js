const mongoose = require("mongoose")


const connectdb = async() =>{
   await mongoose.connect(process.env.MONGO_URI);
   console.log("database is connected :p")
}



 module.exports = connectdb;