"""
Day 20 – Python Basics (Explained)
Topics:
1. Sets
2. Stack
3. Queue
4. Functions
"""

# =========================
# 1. SETS
# =========================
# Set unordered hota hai
# Duplicate values allow nahi hoti

print("---- SETS ----")

numbers = {1, 2, 3, 3, 4}
# 3 do baar likha hai, lekin set me aik hi baar ayega
print("Original Set:", numbers)

# Value add karna
numbers.add(5)
print("After adding 5:", numbers)

# Value remove karna
numbers.remove(2)
print("After removing 2:", numbers)


# =========================
# 2. STACK (LIFO)
# Last In → First Out
# Jaise plates ka stack
# =========================

print("\n---- STACK ----")

stack = []  # empty stack

# Items add karna
stack.append("Home Page")
stack.append("Profile Page")
stack.append("Settings Page")

print("Stack:", stack)

# Last item remove hota hai
last_page = stack.pop()
print("Removed:", last_page)
print("Stack now:", stack)


# =========================
# 3. QUEUE (FIFO)
# First In → First Out
# Jaise bank line
# =========================

print("\n---- QUEUE ----")

from collections import deque

queue = deque()

# Line me log add karna
queue.append("Ali")
queue.append("Ahmed")
queue.append("Sara")

print("Queue:", queue)

# Pehla banda serve hota hai
served_person = queue.popleft()
print("Served:", served_person)
print("Queue now:", queue)


# =========================
# 4. FUNCTIONS
# Function code reuse ke liye hota hai
# =========================

print("\n---- FUNCTIONS ----")

def greet(name):
    # Yeh function naam le kar greeting return karta hai
    return "Hello " + name

def add_numbers(a, b):
    # Yeh function do numbers add karta hai
    return a + b

# Function call
print(greet("Abdul Hadi"))
print("Sum:", add_numbers(10, 5))
