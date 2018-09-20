/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable
var = s1;
var sqr = [];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  var loc = createVector(random(width), random(height));
  rect(20, 20, 20, 20, loc.x, loc.y)
  var col = color(300,300,300);
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares(10);
  //  traverse array and run each square

}

function draw() {
  background(20,20,20,40)
  s1.run();
  for(var i = 0; i sqr.length; i++){
    sqr[i].run();

  }

}


function loadSquares(){\
  var rowNum = 0;
      for(var i = 0; i < 64; i++){
        //get  location properties
        var x =     //  Choose x in terms of i
        var y =     //  Choose y in terms of i
        //  Create your location vector
        var loc = createVector(x, y);
  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

}
