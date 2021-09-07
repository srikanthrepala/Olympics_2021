var chalk = require("chalk");
var readlineSync = require("readline-sync")
var headline = 'All about Olympics 2021';
console.log(chalk.bgCyan.bold.underline(headline));
var score = 0;
var highscores =[
  {
    name:'rakesh',
    score:5
  },
  {
    name:'ramesh',
    score:4
  }
]
function abtolympics(question,answer){
  var userAnswer = readlineSync.question(chalk.yellow(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bgGreen("Correct"));
    score++
  }else{
    console.log(chalk.bgRed("Wrong"));
  }
  console.log('your current score: '+chalk.cyan(score));
}
var questions = [
    {
      question :"Total no.of medals india won? ",
      answer:'7'
    },
    {
      question:"No.of gold medols for india? ",
      answer:'1'
    },
    {
      question:"who won gold medal for india? ",
      answer:"Neeraj Chopra"
    },
    {
      question:"what sport bought gold medal? ",
      answer:"Javelin throw",
    },
    {
      question:"What medal does hockey bought? ",
      answer:"bronze",
    },
    {
      question:"how many silvers do we have? ",
      answer:'2',
    },
    {
      question:"how many bronze medals do we have? ",
      answer:"4",
    },
    {
      question :"Where does olympics took place in ? ",
      answer:"tokyo"
    },
]

function quiz(){
    for(i=0;i<questions.length;i++){
    currentQuestion = questions[i]
    abtolympics(currentQuestion.question,currentQuestion.answer)
  }
}
function showScores(){ 
    console.log('your final score '+ chalk.bgMagenta(score));
    for(i=0;i<highscores.length;i++){
      var currentHighscore = highscores[i];
      console.log('High scores are: '+(currentHighscore.name).toUpperCase(),currentHighscore.score);
    }
    console.log("let me know wether I should add your name in the list")
  }

  quiz();
  showScores();
