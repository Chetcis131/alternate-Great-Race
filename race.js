var randleng;

function resetRace()
{
  getElementById("startButton").src="Red.png"


}


//variables for each rocket position
  var pos1 = 0;
  var pos2 = 0;
function start(){
    myVar1 = setInterval(startRace, 4);
    document.getElementById("startButton").src="green.png"

}
function startRace() 
{
  var ranNum = Math.floor(Math.random()*2);
  randleng = Math.floor(Math.random()*5);
  //console.log(ranNum);
  if(ranNum == 0)
  {
    var leng1 = pos1 + randleng;
    pos1+=randleng;
    document.getElementById("Nasa").style.left = leng1 + "px";
  } 

    else if (ranNum == 1)
    {
      var leng2 = pos2 + randleng;
      pos2+=randleng;
      document.getElementById("SpaceX").style.left = leng2 + "px";
    }

//length of race and winner

    if (leng1 >= 900)
    {
      document.body.innerHTML = '<img src="trump.png" ></img>';
      //document.write('<img src="Musk.png">');
     // alert("Musk wins");
      stopRockets();
    }
  
    else if ( leng2 >= 900)
    {
      document.body.innerHTML = '<img src="Musk.png"></img>';
      //document.write('<img src="trump.jpg">');
      //alert("trump wins");
      stopRockets();
    }

function stopRockets()
{
  clearInterval(myVar1);
}
//if (winner == trump){
//document.getElementById("trump").addEventListener("click", resetRace);
//}
//else {
//document.getElementById("Musk").addEventListener("click", resetRace);
//}
}