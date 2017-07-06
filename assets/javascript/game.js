

//function generateRandomNumber () {
  //var ranNum = [Math.floor(Math.random() * 12)];
  //$('.gem1').append('<span>' + ranNum + '</span>'); failed code attempting to append random number to gem1 div
  
  function genRanNum () {
    var ranNum = [Math.floor(Math.random() * 12)];
  }

  
 $('.gem1').on('click', genRanNum);

