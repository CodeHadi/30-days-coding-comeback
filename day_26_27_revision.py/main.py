# Day 26 & 27 - Python Revision

# ---------- Basics ----------
name = "Abdul Hadi"
age = 21
is_student = True

print("Name:", name)
print("Age:", age)
print("Student:", is_student)

# ---------- Conditionals ----------
if age >= 18:
    print("Adult")
else:
    print("Minor")

# ---------- Loops ----------
print("\nFor Loop:")
for i in range(1, 6):
    print(i)

print("\nWhile Loop:")
count = 1
while count <= 3:
    print("Count:", count)
    count += 1

# ---------- Functions ----------
def greet(user_name):
    return f"Hello {user_name}, welcome back!"

print(greet(name))

# ---------- List Practice ----------
numbers = [1, 2, 3, 4, 5]
print("Numbers:", numbers)
print("Length:", len(numbers))

# ---------- Dictionary ----------
user = {
    "name": name,
    "age": age
}
print("User Info:", user)

print("\nRevision complete ✅")
