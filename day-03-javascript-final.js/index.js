// ============================
// Day 3 – JavaScript Final
// Core revision & confidence
// ============================

// 1️⃣ Objects
const user = {
  name: "Hadi",
  role: "Developer",
  skills: ["JavaScript", "Next.js"],
};

console.log(user.name);
console.log(user.skills[0]);

// 2️⃣ Array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled);

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);

// 3️⃣ Destructuring
const { name, role } = user;
console.log(name, role);

// 4️⃣ Spread operator
const newNumbers = [...numbers, 6, 7];
console.log(newNumbers);

// JS Core Completed 🚀
