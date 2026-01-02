// ==========================
// Day 02 – JavaScript Basics
// ==========================

// 1️⃣ Functions
function add(a, b) {
  return a + b;
}
console.log("Add:", add(2, 3));

const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 5));

// Default parameter
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}
greet();
greet("Hadi");

// 2️⃣ Conditions
const age = 20;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}

// 3️⃣ Loops
for (let i = 1; i <= 5; i++) {
  console.log("Loop:", i);
}

// for...of
const numbers = [1, 2, 3, 4];
for (let num of numbers) {
  console.log("Double:", num * 2);
}

// 4️⃣ Practice
// Even / Odd
function isEven(num) {
  return num % 2 === 0;
}
console.log("Even:", isEven(6));
console.log("Even:", isEven(7));

// Array Sum
function arraySum(arr) {
  let sum = 0;
  for (let n of arr) sum += n;
  return sum;
}
console.log("Sum:", arraySum([1, 2, 3, 4]));

// Find Max
function findMax(arr) {
  let max = arr[0];
  for (let n of arr) {
    if (n > max) max = n;
  }
  return max;
}
console.log("Max:", findMax([10, 5, 25, 8]));

