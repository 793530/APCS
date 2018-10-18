//  Global variables
var boids = [];
var balls = [];
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  var loc = createVector(20,20);
  var rad = 25;
  var col = color(0,255,0);


  b1 = new Ball(loc,rad,col);
  loadBalls(12);
}

function draw() {
  background(20,20,20,40);
  b1.run();
  for(var i = 0; i<balls.length; i++){
     boids[i].run();
}
}

function loadBoids(numBoids){
    for(var i = 0; i<numBoids; i++){
      var loc = createVector(random(width), random(height));
      var rad = 15;
      var col = color(255,0,0);

      boids.push(new Boid(loc,rad,col))
    }
}
