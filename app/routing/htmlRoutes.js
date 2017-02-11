//Including path package to serve up correct file path for html
var path = require("path");

//Routing for the html pages
module.exports = function(app){
  //Route to display the survey Page
  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //Default route to the home page
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"))
  });

  //Default route to the home page
  // app.use(function(req, res){
  //   res.sendFile(path.join(__dirname, "/../public/home.html"))
  // });


};
