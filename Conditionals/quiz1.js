var scoreJohn = 30,
  scoreNick = 30;

var lowerLimit = 51;

if (scoreJohn >= lowerLimit && scoreNick >= lowerLimit) {
  console.log("both passed");
} else if (scoreNick >= lowerLimit || scoreJohn >= lowerLimit) {
  console.log("one has passed");
  if (scoreNick >= lowerLimit) {
    console.log("Nick has passed with " + scoreNick + " points");
  }
  if (scoreJohn >= lowerLimit) {
    console.log("John has passed with " + scoreJohn + " points");
  }
} else {
  console.log("none passed");
}

/*
The key thing to note in this exercise is that the else if statement is 
executed when the first statement fails but the if statements next to each
other will both execute regardless if the other fails or not. 
*/