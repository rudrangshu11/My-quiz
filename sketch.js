var canvas;
var gameState = 0;
var contestantCount, database, quiz, question, contestant, allContestants;

function setup(){
  canvas = createCanvas(850,400);

  //objects
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  database = firebase.database();
}


function draw(){
  background("pink");
  quiz.display();
  
}
