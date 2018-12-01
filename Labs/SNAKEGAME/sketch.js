var w = 20;
var cols, rows;
var snake;
var food;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(10);
  fill(200, 30, 150);
  cols = width/w;
  rows = height/w;
  var loc = createVector(width/2, height/2);
  var vel = createVector(1, 0);
  snake = new Snake(loc, vel);
  food = new Food(createVector(100, 100));
  food.pickLoc();
}

function draw() {
  background(2);
  snake.run();
  food.run();
  //if(snake.loc() = food.loc()
    //snake(loc =(width/2, height/2),(1, 0) ));
  }



function keyPressed(){ //Keys (controls)
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0,-1*w);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0,1*w);
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1*w,0);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1*w,0);
  }


}
