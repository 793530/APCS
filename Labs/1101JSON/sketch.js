//Kalpa Yakupitiyage
//1101JSON
//11/01/2018
var data;

function setup(){

  loadJSON("worldCupsmall.json", gotData);

}

function gotData(newData ){
  console.log(newData);
  data = newData;
 bubbleSort();

}


 function draw(){



 }

function bubbleSort(){               //The code keeps repeating until it is false
  var length = data.teams.length;
  for(var i = length-1; i > 0; i--){
    for(var j = 0; j < i; j++ ){
      if(data.teams[j].rating < data.teams[j+1].rating){
        var tmp = data.teams[j].rating;
        data.teams[j].rating = data.teams[j+1].rating;
        data.teams[j+1].rating = tmp;
      }

    }
  }
}
