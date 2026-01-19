# Lists
numbers = [1, 2, 3, 4, 5]
print("List:", numbers)

numbers.append(6)
print("After append:", numbers)

# Tuples
coordinates = (10, 20, 30)
print("Tuple:", coordinates)

# Tuples are immutable
# coordinates[0] = 50  # This will give an error

# Dictionaries
student = {
    "name": "Abdul Hadi",
    "age": 21,
    "course": "Python"
}

print("Dictionary:", student)
print("Student Name:", student["name"])

student["age"] = 22
print("Updated Dictionary:", student)
