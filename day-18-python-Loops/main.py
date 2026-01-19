# FOR LOOP
for i in range(1, 6):
    print("For loop number:", i)


# WHILE LOOP
count = 1
while count <= 5:
    print("While loop number:", count)
    count += 1


# BREAK
for i in range(1, 10):
    if i == 5:
        break
    print("Break example:", i)


# CONTINUE
for i in range(1, 6):
    if i == 3:
        continue
    print("Continue example:", i)


# PASS
for i in range(1, 4):
    if i == 2:
        pass  # future code yahan likha ja sakta hai
    print("Pass example:", i)
