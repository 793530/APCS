 /*
**  PaddleBall Game //Ball
**  Kalpa Yakupitiyage
**  October 17, 2018
*/

function Ball(loc, rad, col){
  // Instance variables
   this.acc = createVector(0,.1);
   this.loc = loc;
   this.vel = createVector(random(-3,3), random(-3,3));
   this.rad = rad;
   this.col = col;



  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
     if(this.loc.x < 0) this.vel.x = -this.vel.x;
     if(this.loc.x > width) this.vel.x = -this.vel.x;
     if(this.loc.y < 0) this.vel.y = -this.vel.y;
     if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
  // This function changes the location of the ball
  // by adding speed to x and y
   this.update = function(){
     this.vel.add(this.acc);
     this.loc.add(this.vel);
   }



    // render() draws the ball at the new location
   this.render = function(){
      fill(this.col);
      ellipse(this.loc.x, this.loc.y, rad, rad);
   }

  this.isColliding = function(){



  }

}
