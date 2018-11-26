//Kalpa yakupitiyage
//snakeGame
//11/15/2018

var w = 20;
var cols = rows;
var snake;

function snake(loc, vel){
  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();

    this.update = function (){
      this.loc.add(this.vel);
      this.loc.x = Constrain (this.loc.x,0,width,-w)

      this.render = function(){
        fill(255);
        rect(this.loc.x.this.loc y ,w,w)

        function keyPressed(){
          if(keyPressed === UP_ARROW){
            snake.vel = createVector(0,-1);
          if(keyPressed === DOWN_ARROW){
            snake.vel = createVector(0,1);
          if(keyPressed === LEFT_ARROW){
            snake.vel = createVector(-1,0);
          if(keyPressed === RIGHT_ARROW){
            snake.vel = createVector(1,0);


          }


        }


      }


    }


  }





}
