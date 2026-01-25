// Day 1 - JavaScript Basics

// Variables

let age = 24;
const name = "Abdul Hadi";

age = 25 // ✅ allowed
name = "Ali"; // ❌ error (const)

// Arrow Functions

const greet = (names) => {
  return `Hello, ${names}`;
};
console.log(greet(names));

// Array + Loop
let skills = ["JavaScript", "Next.js", "Python"];

skills.map(skill => {
  console.log("Skill:", skill);
});

// Object
let user = {
  name: name,
  age: age,
  skills: skills
};
console.log(user);