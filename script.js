/* .js files add interaction to your website */

/* front page project buttons */

/*
var factList = [
    "As part of UCSD SEDS. Performed actuator and servo testing, CAD modeling; Software skills used include C, Python, MATLAB, Fusion 360.", 
        
    ".",
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

// Define fact lists for each button
var factLists = [
  [
    "Fact 1 for Button 1",
    "Fact 2 for Button 1",
    "Fact 3 for Button 1"
  ],
  [
    "Fact 1 for Button 2",
    "Fact 2 for Button 2",
    "Fact 3 for Button 2"
  ],
  [
    "Fact 1 for Button 3",
    "Fact 2 for Button 3",
    "Fact 3 for Button 3"
  ],
  [
    "Fact 1 for Button 4",
    "Fact 2 for Button 4",
    "Fact 3 for Button 4"
  ],
  [
    "Fact 1 for Button 5",
    "Fact 2 for Button 5",
    "Fact 3 for Button 5"
  ],
  [
    "Fact 1 for Button 6",
    "Fact 2 for Button 6",
    "Fact 3 for Button 6"
  ]
];

// Initialize counts for each button
var counts = [0, 0, 0, 0, 0, 0];

// Set up event listeners for all buttons
document.querySelectorAll(".buttonStyle").forEach((button, index) => {
  button.addEventListener("click", () => {
    // Get the corresponding fact display element
    var factElement = document.querySelector(`.factDisplay[data-index="${index}"]`);
    
    // Update the fact content
    factElement.innerHTML = factLists[index][counts[index]];
    
    // Increment the count and reset if needed
    counts[index]++;
    if (counts[index] === factLists[index].length) {
      counts[index] = 0;
    }
  });
});
