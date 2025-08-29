// 🎯 Part 1: Basics


// Variable declarations
let age = 20;
let hasTicket = true;

// Conditional logic
if (age >= 18 && hasTicket) {
  console.log("You can enter the concert! 🎶");
} else {
  console.log("Sorry, entry denied ");
}


// Part 2: Functions


// Function 1: Greet User
function greetUser(name) {
  document.getElementById("greeting").innerText = `Hello, ${name}! 👋`;
}

// Function 2: Calculate Sum
function calculateSum(a, b) {
  return a + b;
}
console.log("Sum of 5 + 10 =", calculateSum(5, 10));


// Part 3: Loops

// Example 1: for loop
document.getElementById("loopBtn").addEventListener("click", () => {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear before adding
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});

// Example 2: while loop (countdown)
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}


//  Part 4: DOM Manipulation


// 1. Toggle class
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("toggleText").classList.toggle("dark");
});

// 2. Change text dynamically
document.getElementById("toggleText").addEventListener("click", () => {
  document.getElementById("toggleText").innerText = "You clicked me! 😎";
});

// 3. Form interaction
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let nameValue = document.getElementById("nameInput").value;
  document.getElementById("formOutput").innerText = `Welcome, ${nameValue}!`;
});
