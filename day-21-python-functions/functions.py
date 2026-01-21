# Day 21 – Python Functions
# Topic: Functions, Parameters, Return, Lambda

print("Day 21: Python Functions\n")

# 1️⃣ Simple function (no parameters)
def greet():
    print("Hello! Welcome to Python Functions.")

greet()


# 2️⃣ Function with parameters
def greet_user(name):
    print(f"Hello {name}, hope you're learning well!")

greet_user("Hadi")


# 3️⃣ Function with multiple parameters
def add_numbers(a, b):
    result = a + b
    return result   # return value

sum_result = add_numbers(5, 3)
print("Sum is:", sum_result)


# 4️⃣ Function with return value
def square(number):
    return number * number

print("Square of 4 is:", square(4))


# 5️⃣ Lambda function (short function)
# lambda is used for one-line simple logic
double = lambda x: x * 2

print("Double of 6 is:", double(6))


# 6️⃣ Real-life style example
def calculate_total(price, quantity):
    return price * quantity

total_bill = calculate_total(500, 2)
print("Total Bill:", total_bill)
