var readlineSync = require('readline-sync');


let count = 0;
var questionsArray = [
  {
    question: "What's Charles' son's name? ",
    answer: "Nikolaj"
  },
  {
    question: "How many kids does Terry have? ",
    answer: "3"
  },
  {
    question: "What's the name of Captain Holt's Dog? ",
    answer: "Cheddar"
  },
  {
    question: "What's Gina's last name? ",
    answer: "Linetti"
  },
  {
    question: "What's the Pontiac Bandit's real name (Only first name)? ",
    answer: "Doug"
  },
  {
    question: "Where did Terry spend time in during college (name country)? ",
    answer: "Japan"
  },
  {
    question: "What is Jake's favorite movie? ",
    answer: "Die Hard"
  },
  {
    question: "How many brothers does Amy have? ",
    answer: "7"
  },
  {
    question: "Which character from the series is fond of organising things & being disciplined? ",
    answer: "Amy"
  },
  {
    question: "Which character is known for singing Opera? ",
    answer: "Scully"
  }]

console.log("Hey Nine-Nine, Welcome to Brooklyn Fandom Quiz! \n");

for (i = 0; i < questionsArray.length; i++) {
  runQuiz(questionsArray[i].question, questionsArray[i].answer);
}

function runQuiz(ques, ans) {
  var userAns = readlineSync.question(ques);
  if (userAns.toLowerCase() === ans.toLowerCase()) {
    count += 1;
    console.log("You are right!")
    console.log("Your current score is: ", count);
    console.log("----------------------")
  } else {
    console.log("You are wrong!")
    console.log("Your current score is: ", count);
    console.log("----------------------")
  }
}

const scores = [{
  name: "Shashi",
  score: 10
},
{
  name: "Thakur",
  score: 9
},
{
  name: "Vyas",
  score: 7
}]
console.log("\n")
console.log("Your total score is: ", count);
console.log("\n")
console.log("Top 3 High scores are: ")
scores.map((s) => {
  console.log(s.name + ": " + s.score)
})
console.log("\n")
console.log("If you have beaten the top scores, do send the screenshot to pvmallikarjuna.dev@gmail.com")