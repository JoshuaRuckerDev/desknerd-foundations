// main.js - basic navigation logic

// Grab things from the page
const wrapper = document.querySelector(".worlds-wrapper");
const panels = document.querySelectorAll(".world-panel");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const dots = document.querySelectorAll(".dot");

// Which world are we on right now? (0 = Y, 1 = B, 2 = R1, 3 = R2)
let currentIndex = 0;

// Move to a specific world/panel
function goToPanel(index) {
  // keep index in range (0 to last panel)
  if (index < 0) index = 0;
  if (index > panels.length - 1) index = panels.length - 1;

  // remember where we are
  currentIndex = index;

  // pick the correct panel
  const targetPanel = panels[currentIndex];

  // scroll to it smoothly (left/right)
  targetPanel.scrollIntoView({ behavior: "smooth", inline: "start" });

  // update dots so the active one moves
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// set initial position and dots
goToPanel(0);

// arrow events
if (arrowLeft) {
  arrowLeft.addEventListener("click", () => {
    goToPanel(currentIndex - 1);
  });
}

if (arrowRight) {
  arrowRight.addEventListener("click", () => {
    goToPanel(currentIndex + 1);
  });
}

// dot events
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const target = parseInt(dot.getAttribute("data-target"), 10);
    goToPanel(target);
  });
});
