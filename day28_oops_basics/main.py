# Day 28 - OOPs Basics in Python
# Topic: Class, Object, __init__, self, Methods

# 1️⃣ Class banana
class Student:
    # constructor (jab object banay ga, ye auto call hoga)
    def __init__(self, name, roll_no):
        self.name = name        # instance variable
        self.roll_no = roll_no

    # method (function inside class)
    def introduce(self):
        print(f"My name is {self.name} and my roll number is {self.roll_no}")


# 2️⃣ Object banana (class ka instance)
student1 = Student("Abdul Hadi", 101)
student2 = Student("Ali", 102)

# 3️⃣ Object se method call karna
student1.introduce()
student2.introduce()
