
/*
**  PaddleBall Game //Paddle
**  Kalpa Yakupitiyage
**  October 4, 2018
*/

function Paddle(loc, col){
  this.loc = loc;
  this.col = col;
  this.vel = createVector(random(-3,3), random(-3,3));

 this.run = function(){
  this.checkEdges();
  this.update();
  this.render();

}

 this.checkEdges = function(){
   if(this.loc.x < 0) this.vel.x = -this.vel.x;
   if(this.loc.x > width) this.vel.x = -this.vel.x;
   if(this.loc.y < 0) this.vel.y = -this.vel.y;
   if(this.loc.y > height) this.vel.y = -this.vel.y;
}
 this.update = function(){
   this.vel.add(this.acc);
   this.loc.add(this.vel);
 }
 this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 2 , 2);
 }


}
