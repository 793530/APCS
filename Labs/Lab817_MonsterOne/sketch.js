
//  This is a comment //TEst
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  background(200, 200,200);


}

//  The draw function is called @ 30 fps
// Spider
function draw() {
  fill(305, 10, 81);
  line(150,350,100,100)
  line(150,350,110,110)
  line(150,350,120,120)
  line(150,350,130,130)
  line(150,350,140,140)
  line(150,350,150,150)
  line(150,350,160,160)
  line(-150,350,100,100)
  line(-150,350,110,110)
  line(-150,350,120,120)
  line(-150,350,130,130)
  line(-150,350,140,140)
  line(-150,350,150,150)
  line(-150,350,160,160)

  line(150,250,100,500)
  line(150,250,110,510)
  line(150,250,120,520)
  line(150,250,130,530)
  line(150,350,140,540)
  line(150,350,150,550)
  line(150,350,160,560)
  line(-150,505,100,500)
  line(-150,505,110,510)
  line(-150,505,120,520)
  line(-150,505,130,530)
  line(-150,505,140,540)
  line(-150,505,150,550)
  line(-150,505,160,560)

  ellipse(150, 305, 105,105);
  fill(305, 10, 200);
  ellipse(150, 305, 70,70);
  fill(305, 10, 81);
  ellipse(150, 305, 50,50);
  fill(305, 10, 800);
  ellipse(150, 305, 30,30);
}
