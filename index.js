var randleng;

//resets race
  function resetRace()
  {
    
    // window.location.reload(true);
  }
//locates trump and musk on startline
    var trump = 0;
    var Musk = 0;
  function startRace() 
  {
    var myVar1 = setInterval(startRace, 4);
    var ranNum = Math.floor(Math.random()*2);
    randleng = Math.floor(Math.random()*5);
    if(ranNum == 0)
    {
      var leng1 = trump + randleng;
      trump+=randleng;
      document.getElementById("Nasa").style.left = leng1 + "px";
    } 
    else if (ranNum == 1)
    {
      var leng2 = Musk + randleng;
      Musk+=randleng;
      document.getElementById("SpaceX").style.left = leng2 + "px";
    }
  
  // the winner
  var clicked = true;
    if (trump == 10)
    {
      clicked = true;
      stopRockets();
    }
    else if (musk == 10)
    {
      clicked = true;
      stopRockets();
    }
  }
    

  //function stopRockets()
  //{
    //clearInterval(myVar1);
  //}
      

  