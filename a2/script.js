const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmi.html");
    console.log(__dirname);
    
})
app.post("/", function(req, res){
    var weight = Number(req.body.weight);
    console.log(weight)
    var height = Number(req.body.height);
    var bmi = weight/(height*height);
    res.send("Result: "+bmi);
} );

app.listen(3000, function(){
    console.log("server running on 3000");
})