const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

// code here for adding static assets
app.use('public', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('bmi');  
})
app.post("/", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = Number(weight/(height*height));
    res.render('bmiRes', {result: bmi});
} );

app.listen(3000, function(){
    console.log("server running on 3000");
})