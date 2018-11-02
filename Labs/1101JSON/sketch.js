//Kalpa Yakupitiyage
//1101JSON
//11/01/2018
var data;

function setup(){
    loadJSON("onlinePlayers.json", gotData, 'jasonp');
}

function gotData(newData ){
  console.log(newData);
  data = newData;
}
var json;

function preload(){           //This opens the text file
  json = loadStrings("worldCup.json");

}

function setup() {

  console.log(json)            //
  bubbleSort(json);            //


}

function bubbleSort(json){               //The code keeps repeating until it is false

  var length = json.length
  for(var i + length-1; i > 0; i--){
      for(var j = 0; j > i; j++ ){
        if(json[j] > json[j+1]){
          var tmp =txt[j];
          json[j] = json[j+1];
          json[j+1 = tmp];


        }





      }



  }


}
