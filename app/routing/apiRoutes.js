//Retreiving infromation from the data friend file
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

    //identifying the user array who most recently entered the survey so we can find a friend for them
    var x = friend.length-1;
    //Giving total difference a value of 0 prior to the calcultion
    var totalDifference = 0;
    //Givinge lowestScore a ridiculious number so that we can slowly find out which friend
    //in our list has the lowest possible difference
    var lowestScore = 1000;
    var closestFriend;
    //For loop that goes through each friend while doing another for loop through each
    //score and finding the difference for the most recent user entered survey.
    for (var i = 0; i < friend.length - 1; i++) {
      for (var j = 0; j < 10; j++) {
        //Calculating difference between each respective score
        var diff = friend[i].scores[j] - friend[x].scores[j];
        //Getting the absolute value of the difference
        diff = Math.abs(diff);
        //Calculating the total difference for all numbers
        totalDifference = totalDifference + diff;
      }
      //Checking to see which one has the lowest score
      if(totalDifference < lowestScore){
        lowestScore = totalDifference;
        //console.log("lowestScore " + lowestScore);
        //console.log("friend: " + friend[i].name);

        //assigning the closestFriend the value of the object with the lowest score
        closestFriend = friend[i];
      }
      //console.log("totalDifference " + totalDifference);
      //We want to redefine the totalDifference to 0 after the loop is finished going
      //through each score
      totalDifference = 0;
    }
    //console.log("Final Friend: " + JSON.stringify(closestFriend));
    //Response in JSON format
    res.json(closestFriend);
    //console.log("totalDifference after for loop" + totalDifference);

    var lowestScore = 1000;
    });

}
