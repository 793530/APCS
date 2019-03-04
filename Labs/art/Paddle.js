
/*
**  PaddleBall Game //Paddle
**  Kalpa Yakupitiyage
**  October 17, 2018
*/

function Paddle(loc, col){
  this.loc = loc;
  this.col = col;
// This function calls other functions
 this.run = function(){
  this.update();
  this.render();

}

// This function changes the location of the ball
// by adding speed to x and y
 this.update = function(){
   this.loc.x = lerp(this.loc.x, mouseX, 0.05);
 }

 // render() draws the ball at the new location
 this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 100 , 10);
 }


}
