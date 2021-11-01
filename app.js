const { config } = require("dotenv");
const express = require("express");
const connectdb = require("./config/connectdb.js");

app = express();

require("dotenv").config();

//function for the coonection to the DB

connectdb();

//middleware read json 

app.use(express.json());

//middlewere contact routes

app.use("/api/contact", require("./router/hello"));

PORT =  process.env.PORT ||  5000 ; 



app.listen(PORT , (err) => {
    err ? console.log(err) : console.log(`server is up and running on port ${PORT} happy coding ! `);
})