var canvas,backgroundImg

var gameState = 0;
var playerCount;
var database;
var form,game,player;

function setup(){
  createCanvas(400,400);
  database = firebase.database();
  

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
}

