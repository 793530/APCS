//Kalpa yakupitiyage
//snakeGame
//11/15/2018


function Snake(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.segments.push(createVector(0, 0));

  this.addSegment = function(){
    this.segments.push(createVector(this.segments[0].x,this.segments[0].y));

  }

  this.run = function(){
    this.update();
    this.render();

  }

  this.update = function (){
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    for(var i= this.segments.length - 1 ; i > 0; i--){
      this.segments[i].x = this.segments[i-1].x ;
      this.segments[i].y =  this.segments[i-1].y;

    }


    this.loc.add(this.vel);
    this.loc.x = constrain (this.loc.x,0,width-w)
    this.loc.y = constrain (this.loc.y,0,height-w)
  }
  this.render = function(){
    fill(255,0,0);
    //rect(this.segments[0].x,this.segments[0].y ,w,w);
    //rect(this.loc.x,this.loc.y ,w,w);

    for(var i= 0; i < this.segments.length; i++){
        rect(this.segments[i].x,this.segments[i].y,w,w);


    }
  }




}//  +++++++++++++++++++++++++++++++++++++++  end of Snake
