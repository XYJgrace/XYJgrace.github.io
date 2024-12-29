/* .js files add interaction to your website */

/* front page project buttons */

var factList = [
    "Actuator and servo testing.", /*0*/
        
    "Software skills used include C, Python, MATLAB, Fusion 360.",
  ];
  
  var fact = document.getElementById("fact");
  var factButton = document.getElementById("factButton");
  var count = 0;
  
  if (factButton) {
    factButton.addEventListener("click", displayFact);
  }
  
  function displayFact() {
    fact.innerHTML = factList[count];
    count ++;
    if(count == factList.length) {
      count=0;
    }
  }