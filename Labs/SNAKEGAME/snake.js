//Kalpa yakupitiyage
//snakeGame
//11/15/2018

function Snake(loc, vel){
  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();

  }

  this.update = function (){
    this.loc.add(this.vel);
    this.loc.x = constrain (this.loc.x,0,width,-w)
  }
  this.render = function(){
    fill(255);
    rect(this.loc.x.this.loc.y ,w,w)
  }



}//  +++++++++++++++++++++++++++++++++++++++  end of Snake
