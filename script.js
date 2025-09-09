//  Part 1: Variables, Conditionals
// Declare some variables
let userName = "Developer";
let isLearning = true;

// Conditional logic (if/else)
if (isLearning) {
  console.log(userName + " is learning JavaScript 🎉");
} else {
  console.log(userName + " is not studying right now.");
}

// Part 2: Functions 
// Function 1: Simple greeting function
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the beauty of web development.";
}
console.log(greetUser("Veronicah"));

// Function 2: Toggle theme (dark/light)
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Attach event to button
document.getElementById("changeColorBtn").addEventListener("click", toggleTheme);

// Part 3: Loops 
// Array of web dev features
let features = ["Responsive Design", "DOM Manipulation", "APIs", "Flexbox & Grid", "JavaScript Functions"];

// Loop 1: Populate features dynamically into the list
let featureList = document.getElementById("featureList");
for (let i = 0; i < features.length; i++) {
  let li = document.createElement("li");
  li.textContent = features[i];
  featureList.appendChild(li);
}

// Loop 2: Countdown simulation (console only)
let countdown = 5;
while (countdown > 0) {
  console.log("Launching webpage in... " + countdown);
  countdown--;
}

// Part 4: DOM Manipulation
// Fun facts array
let funFacts = [
  "JavaScript was created in just 10 days!",
  "CSS Grid makes 2D layouts so much easier.",
  "Over 95% of websites use JavaScript.",
  "Web development is both creative and logical!"
];

// DOM interaction 1: Show random fun fact on button click
document.getElementById("factBtn").addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * funFacts.length);
  document.getElementById("funFact").textContent = funFacts[randomIndex];
});

// DOM interaction 2: Change text color of sidebar dynamically
document.querySelector(".sidebar").style.color = "#4CAF50";

// DOM interaction 3: Add hover effect using JS
document.querySelector(".hero").addEventListener("mouseover", function () {
  this.style.backgroundColor = "#45a049";
});
document.querySelector(".hero").addEventListener("mouseout", function () {
  this.style.backgroundColor = "#4CAF50";
});
