
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

function draw() {
  rect(100, 300, 10,10);

  this.update = function (){
    this.loc.add(this.vel);
    this.loc.x = Constrain (this.loc.x,0,width,-w)

  }

}
