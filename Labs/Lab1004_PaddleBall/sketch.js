
/*
**  PaddleBall Game //Sketch
**  Kalpa Yakupitiyage
**  October 4, 2018
*/
//  Global variables
var b1;
var balls = [];
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  var loc = createVector(random(width), random(height));
  var rad = 15;
  var col = color(0,0,255);
  b1 = new Ball(loc,rad,col);
  loadBalls(25);
}

//function Paddle(){
  //cnv.position((windowWidth-width)/2, 30);
  //background(20,20,20);
  //var loc = createVector(random(width), random(height));
  //var col = color(0,0,255);
  //b1 = new Ball(loc,col);


}

function draw() {
  background(20,20,20,40);
  b1.run();
  for(var i = 0; i<balls.length; i++){
     balls[i].run();
}
}

function loadBalls(numBalls){
    for(var i = 0; i<numBalls; i++){
      var loc = createVector(random(width), random(height));
      var rad = 15;
      var col = color(255,0,0);
      balls.push(new Ball(loc,rad,col))
    }
}
