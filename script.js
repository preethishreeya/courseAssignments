var height1 = "160";
var height2 = "125";
var height3 = "126";
var age1 = "32";
var age2 = "33";
var age3 = "34";

var score1 = height1 + (5*age1);
var score2 = height2 + (5*age2);
var score3 = height3 + (5*age3);

if (score1>score2 && score1>score3)
    {
        console.log("The first player is the winner.");
    }
else if (score2>score3)
    {
        console.log("The second player is the winner.");
    }
else {
        console.log("The third player is the winner.");
    }

