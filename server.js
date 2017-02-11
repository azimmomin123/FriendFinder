//Deoendencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Points server to a series of 'route' files. Respoings when users visit certian URLS
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


//Starts the server to begin listening
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});
