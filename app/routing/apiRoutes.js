var friend = require("../data/friend");


//Routing for the api pages/data
module.exports = function(app) {

  //GET route to display a JSON of all possible friends
  app.get("/api/friends", function(req, res){
    res.json(friend);
    // console.log(friend);
    //
    // console.log(friend[0].scores[0]);
  });


  //POST Route that will handle incoming survey results and will handle the compatibility logic
  app.post("/api/friends", function(req, res){
    var newSurveyFriend = req.body;

    //Adding to the friend array
    friend.push(newSurveyFriend);
    //console.log(friend.length);

    var x = friend.length-1;
    var totalDifference = 0;
    var lowestScore = 1000;
    var closestFriend;
    for (var i = 0; i < friend.length - 1; i++) {
      for (var j = 0; j < 10; j++) {
        var diff = friend[i].scores[j] - friend[x].scores[j];
        diff = Math.abs(diff);
        totalDifference = totalDifference + diff;
      }
      if(totalDifference < lowestScore){
        lowestScore = totalDifference;
        //console.log("lowestScore " + lowestScore);
        //console.log("friend: " + friend[i].name);
        closestFriend = friend[i];
      }
      //console.log("totalDifference " + totalDifference);
      totalDifference = 0;
    }
    //console.log("Final Friend: " + JSON.stringify(closestFriend));
    //Response in JSON format
    res.json(closestFriend);
    //console.log("totalDifference after for loop" + totalDifference);

    var lowestScore = 1000;
    });

}
