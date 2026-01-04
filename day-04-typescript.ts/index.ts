// ============================
// Day 4 – TypeScript Basics
// ============================

// Basic Types
let username: string = "Hadi";
let age: number = 22;
let isDeveloper: boolean = true;

console.log(username, age, isDeveloper);

// Arrays
let skills: string[] = ["JavaScript", "TypeScript", "Next.js"];
console.log(skills);

// Function with types
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3));

// Arrow function with types
const greet = (name: string): string => {
  return `Hello ${name}`;
};
console.log(greet("Hadi"));

// Union type
let id: number | string;
id = 101;
id = "A102";
console.log(id);

// TypeScript basics done 🚀
