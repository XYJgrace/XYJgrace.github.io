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
  if (factButton1) {
    factButton1.addEventListener("click", fact1.innerHTML = factList[1]);
  }

  var fact2 = document.getElementById("fact2");
  var factButton2 = document.getElementById("factButton2");  
  if (factButton2) {
    factButton2.addEventListener("click", fact2.innerHTML = factList[2]);
  }

  var fact3 = document.getElementById("fact3");
  var factButton3 = document.getElementById("factButton3");  
  if (factButton3) {
    factButton3.addEventListener("click", fact3.innerHTML = factList[3]);
  }

  var fact4 = document.getElementById("fact4");
  var factButton4 = document.getElementById("factButton4");  
  if (factButton4) {
    factButton4.addEventListener("click", fact4.innerHTML = factList[4]);
  }

  var fact5 = document.getElementById("fact5");
  var factButton5 = document.getElementById("factButton5");  
  if (factButton5) {
    factButton5.addEventListener("click", fact5.innerHTML = factList[5]);
  }

  var fact6 = document.getElementById("fact6");
  var factButton6 = document.getElementById("factButton6");  
  if (factButton6) {
    factButton6.addEventListener("click", fact6.innerHTML = factList[6]);
  }