// import the module 'express'
var express = require('express');

// init the app
var app = express();

app.locals.title = "My App";
app.locals.email = "myEmail@etwas.de"

//aditional headers for CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    next();
})

// Routing
// definieren routing
// req -> request
// res -> result

app.get('/', function(req, res) {
    res.send("Hi here I'm")
});

app.get("/states", function(req, res) {
    var states = {
        'state': 'Hamburg',
        'capital': 'Hamburg'
    }
    res.send(states)
});

//Rechte für img-Ordner
//app.use(express.static(require('path').resolve(__dirname + "/../../img"))); ??


// http://localhost:4000/hamburg.png
//app.get("/hamburg.png", function(req, res) {

// http://localhost:4000/img/hamburg.png
app.get("/img/hamburg.png", function(req, res) {

    // wenn img in desselben path wo index.js befindet sich
    // res.sendFile('/hamburg.png', { root: __dirname });

    res.sendFile(require('path').resolve(__dirname + '../../img/hamburg.png'));

});

//Listening -> localhost:4000 -> 
app.listen(4000, function() {
    console.log("Hi, my App started...")
    console.log(app.locals.title);
    console.log(app.locals.email);
});