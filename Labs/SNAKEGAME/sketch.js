var w = 20;
var cols, rows;
var snake;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cols = width/w;
  rows = height/w;
  var loc = createVector(width/2, height/2);
  var vel = createVector(1, 0);
  snake = new Snake(loc, vel);

}

function draw() {
  snake.run();

  }


function keyPressed(){ //Keys (controls)
  if(keyPressed === UP_ARROW){
    snake.vel = createVector(0,-1);
  }
  if(keyPressed === DOWN_ARROW){
    snake.vel = createVector(0,1);
  }
  if(keyPressed === LEFT_ARROW){
    snake.vel = createVector(-1,0);

  }
  if(keyPressed === RIGHT_ARROW){
    snake.vel = createVector(1,0);

  }


}
