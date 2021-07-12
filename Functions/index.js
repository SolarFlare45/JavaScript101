function funName(name, score, callback) {
  var passUni = 71;

  var passColl = 51;

  if (score >= passUni) {
    console.log(`${name} has enrolled in University`);
  } else if (score > passColl) {
    console.log(`${name} has enrolled in College`);
  } else {
    console.log(`${name} has failed!`);
  }

  if (callback) callback(score);
}

//function can be used as a parameter
function calcScore(quizScore, essayScore) {
  var score = quizScore + essayScore;
  return score;
}

//function can be used as a callback
function calcScore2(score) {
  console.log(`Callback says the score is ${score}`);
}

// funName("John", calcScore(40, 30));
funName("Johan", 70, calcScore2);
// funName("Bob", 60);
// funName("Boris", 40);
