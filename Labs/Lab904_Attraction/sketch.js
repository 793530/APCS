//  Global variables
var b1;
var balls = [];
var streeringForce
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  var loc = createVector(random(width), random(height));
  var rad = 25;
  var col = color(0,255,0);
  b1 = new Ball(loc,rad,col);
  loadBalls(12);
  function steeringforce(){
       var steeringForce = p5.Vector.sub(this.loc, other.loc);
       steeringForce.normalize();  //  changes the magnitud to 1
       steeringForce.mult(0.5);
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
}
