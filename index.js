const express = require("express");
const mongoose = require('mongoose');

const app = express()

const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/textProductDB');

app.listen(port,()=>{
    console.log (`Server is running at http://logcalhost:${port}`)
    });

app.get("/", (req, res)=>{
    res.send("Welcome to home Page")
});

