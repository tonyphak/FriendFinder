//linking routes to data sources (friendsArray) using require
var friendsData = require("../data/friend");

module.exports = function (app){
    //API GET request for json information from friend.js
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    //API POST request for JSON information for friends.js
    app.post("/api/friends", function(req, res){
    //create logic to grab user's score to compare with friendsData
        //grab results from user's survery
        var newFriend = req.body;
        var friendName = newFriend.name;
        var friendPhoto = newFriend.photo;
        var friendScores = newFriend.scores;
        var totDiff  = 0;

        //create object for best match
        var bestff = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        //for loop to go through the list of the current array of friends
        for (var i = 0; i<friendsData.length; i++){
            console.log(friendsData[i].name);
            totDiff = 0;

            

            //loop through the scores of the current array of friends
            for (var j = 0; j<friendsData[i].scores[j]; j++){
                //calculate the difference between the scores and sum the numbers for total difference
                totDiff += Math.abs(parseInt(friendScores[j])-parseInt(friendsData[i].scores[j]));
                if(totDiff <= bestff.friendDiff){
                    //set the best friend finder to the for looped friendData
                    bestff.name = friendsData[i].name;
                    bestff.photo = friendsData[i].photo;
                    bestff.friendDiff = totDiff;
                }
            }
        };

        //pushes new submission to array
        friendsData.push(newFriend);

        //retursn json with bestff
        res.json(bestff);
    })
}