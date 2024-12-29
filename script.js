/* .js files add interaction to your website */

/* front page project buttons */

/*
var factList = [
    "Actuator and servo testing.", 
        
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
  }*/

  var factList = [
    "As part of UCSD SEDS. Performed actuator and servo testing, CAD modeling; Software skills used include C, Python, MATLAB, Fusion 360.", 
          
    "Design and built a functioning robot.",

    "Description in progress.",

    "Description in progress.",

    "Description in progress.",

    "Description in progress.",

  ];
  
  var fact1 = document.getElementById("fact1");
  var factButton1 = document.getElementById("factButton1");
  var count = 1;
  
  if (factButton1) {
    factButton1.addEventListener("click", displayFact);
  }
  
  function displayFact() {
    fact1.innerHTML = factList[count];
  }

  if (factButton2) {
    factButton2.addEventListener("click", fact2.innerHTML = factList[2]);
  }

  if (factButton3) {
    factButton3.addEventListener("click", fact3.innerHTML = factList[3]);
  }

  if (factButton1) {
    factButton1.addEventListener("click", fact1.innerHTML = factList[1]);
  }
