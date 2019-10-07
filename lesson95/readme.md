Installation:
https://expressjs.com/de/starter/installing.html

1. ordner 'express2' -- express darf man nicht nutzen reserviert für 'express' in 'node-module'
2. create index.js
3. npm init  enter enter usw. oder npm init -y
4. $ npm install express --no -save
5. in index.js
//

// import the module 'express'
var express = require('express');

// init the app
var app = express();

// define route
// req -> request
// res -> result
app.get('/', function(req, res) {
    res.send("Hi here I'm")
});

app.locals.title = "My App";
app.locals.email = "myEmail@etwas.de"

//Listening -> localhost:4000 -> 
app.listen(4000, function() {
    console.log("Hi, my App started...")
    console.log(app.locals.title);
    console.log(app.locals.email);
});
//// statrtet localhost
6. in terminal in ordner 'express2' node index.js 

 -> Hi, my App started..
 -> My App
 -> myEmail@etwas.de