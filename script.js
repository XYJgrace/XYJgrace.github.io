/* front page project buttons */

// Define fact lists for each button
var factLists = [
  [//SEDS
    "Controls Engineer on Liquid Bi-propellant rocket Riptide, as part of UCSD SEDS",
    "Finalized linear actuator design for use in positioning the engine within a gimbal system and 3D printed miniature model pieces for testing",
    "Tested actuator and servo motor using C code and Arduino",
    "."
  ],
  [//GANK
    "Academic project in MAE 3: building a robot for competition",
    "Designed & built a fully functioning robot with four powered components",
    "Used Fusion 360 for CAD design, and drill press/3D printer/laser cutter/other shop tools for manufacturing",
    "."
  ],
  [//Obstacle
    "Final research project for MAE 8 course at UC San Diego",
    "Performed obstacle avoidance and path planning using MATLAB's Robotics System Toolbox and Navigation Toolbox, then evaluated model performance in both cuboid meshes and Simulation Description Format (SDF)",
    "."
  ],
  [//AI Venture
    "Internship at AI Venture",
    "Implemented Python-based algorithms to develop AI chatbot for education and developed a responsive company website w/ HTML, CSS, and Javascript for product integration",
    "Presented product ideas and designed company logo (image shown above) with Adobe Photoshop",
    "."
  ],
  [//Frontend
    "Extensive frontend web experience, such as the current website you're on",
    "Designed website for personal and professional use, including the website for nonprofit Art4Neuroscience and startup AI Venture",
    "Proficient in HTML, CSS, Javascript",
    "."
  ],
  [//JEI
    "Independent research on machine learning models and their effectiveness against AI art",
    "Publsihed on Journal of Emerging Investigators (JEI)",
    "."
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
