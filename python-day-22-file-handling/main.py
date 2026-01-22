# --- STEP 1: Pehle se bani file mein mazeed likhna (APPEND) ---
# 'a' ka matlab hai Append (ye purani baat ko khatam nahi karta)

user_ki_baat = input("Aaj aapne kya seekha? ")

with open("daily_log.txt", "a") as file:
    file.write(user_ki_baat + "\n")

print("Shabash! Aapki baat file mein save ho gayi.")

# --- STEP 2: Saari details parhna (READ) ---
print("\n--- Aapka ab tak ka sara record: ---")

with open("daily_log.txt", "r") as file:
    for line in file:
        print("Record: " + line.strip())

# --- STEP 3: Ek chota sa logic (Count lines) ---
with open("daily_log.txt", "r") as file:
    total_lines = len(file.readlines())

print(f"\nAb tak file mein total {total_lines} lines likhi ja chuki hain.")
