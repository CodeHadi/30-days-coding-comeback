// ============================
// Day 5 – TypeScript Practical
// ============================

// Interface example
interface User {
  name: string;
  age: number;
  skills: string[];
  isActive?: boolean; // optional property
}

const user1: User = {
  name: "Hadi",
  age: 22,
  skills: ["JavaScript", "TypeScript", "Next.js"],
};

console.log(user1);

// Function with interface type
function showUser(user: User): string {
  return `User ${user.name}, Age: ${user.age}`;
}
console.log(showUser(user1));

// Arrays with interface
const users: User[] = [
  { name: "Ayesha", age: 21, skills: ["Python", "AI"] },
  { name: "Hadi", age: 22, skills: ["JS", "TS"] },
];

users.forEach(u => console.log(u.name, u.skills));

// Type vs Interface (example)
type Product = {
  id: number;
  name: string;
  price: number;
};

const product1: Product = { id: 101, name: "Laptop", price: 50000 };
console.log(product1);


