//food


function Food(loc, vel){
  this.loc = loc;
  this.run = function(){
    //this.update();
    this.render();

  }

  // this.update = function (){
  //
  // }

  this.render = function(){
    fill(255,255);
    rect(this.loc.x,this.loc.y ,w,w)
  }

  this.pickLoc = function(){
    this.loc.y = floor(random(cols)*w);
    this.loc.x = floor(random(rows)*w);

//  var restart(){
//    if snake.loc === food.loc, return;





//  }
  }

}
