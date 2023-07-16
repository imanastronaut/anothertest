const express = require("express");
const bodyParser = require("body-parser");
const superheroes = require('superheroes');
 
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    console.log(req.body.email);
});

app.listen(3000, function(){
    console.log("server running on port 3000");
});