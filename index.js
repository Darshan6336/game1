var read = require("readline-sync")
var welcome = read.question("may i have your name? ")
console.log("Hello " + welcome + " welcome to in the game")
var score = 0;
function user(question, answer) {
  var a = read.question(question);
  if (a === answer) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("opps! Wrong");
    score = score - 1;
  }
}

var q1 = {
  question: "what i like ? ",
  answer: "food"
}
var q2 = {
  question: "what is my name ? ",
  answer: "darshan",
}
var q3 = {
  question: "what is my surname? ",
  answer: "patel",
}
var q4 = {
  question: "What is My First Bike?",
  answer: "classic350",
}
var question = [q1, q2, q3, q4];
for (i = 0; i < question.length; i++) {
  var cq = question[i];
  user(cq.question, cq.answer)

}
console.log("final score " + score)
