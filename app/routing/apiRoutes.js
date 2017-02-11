var friend = require("../data/friend");


//Routing for the api pages/data
module.exports = function(app) {

  //GET route to display a JSON of all possible friends
  app.get("/api/friends", function(req, res){
    res.json(friend);
    console.log(friend);
  });

  //POST Route that will handle incoming survey results and will handle the compatibility logic
  app.post("/api/friends", function(req, res){
    var newSurveyFriend = req.body;
  //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log("new added " + JSON.stringify(newSurveyFriend));

  friend.push(newSurveyFriend);

  res.json(friend);
  });
}
