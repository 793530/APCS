//food


function Food(loc, vel){
  this.loc = loc;
  this.run = function(){
    this.update();
    this.render();

  }

  this.update = function (){
    this.loc.y = (width/2)
    this.loc.x = (width/2)
  }
  this.render = function(){
    fill(255,255);
    rect(this.loc.x,this.loc.y ,w,w)
  }

}
