var randleng;
  function resetRace()
  {
   window.location.reload();
  }
//PLACED THE POS1 & POS2 OUTSIDE OF THE FUNCTION
    var pos1 = 0;
    var pos2 = 0;
  function startRace() 
  {
    var myVar1 = setInterval(startRace, 4);
    var ranNum = Math.floor(Math.random()*2);
    randleng = Math.floor(Math.random()*5);
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
  
  //NOW THEY JUST NEED TO STOP FLYING OFF INTO TIME AND SPACE
      if (pos1 == 11)
      {
        alert("Nasa wins");
        stopRockets();
      }
    
      else if (pos2 == 11)
      {
        alert("Musk wins");
        stopRockets();
      }
  function stopRockets()
  {
    clearInterval(myVar1);
  }
      
}
  