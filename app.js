var express = require("express")

var app = express();
var bodi = require("body-parser");
app.use(bodi.urlencoded({extened:true}))
var mongoose = require('mongoose')

app.get("/",function(req,res){
    res.sendFile("home.html", { root: 'views' })  
});

app.get("/card",function(req,res){
    res.sendFile("birthdaycard.html", { root: 'views' })  
});

app.get("/gallery",function(req,res){
    res.sendFile("gallery.html", { root: 'views' })  
});

app.get("/insta",function(req,res){
    res.sendFile("insta.html", { root: 'views' })  
});


app.use('/assets',express.static('assets'))


var port=process.env.PORT || 5000;
app.listen(port);