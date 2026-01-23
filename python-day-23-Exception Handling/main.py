# --- DAY 23: HANDLING ERRORS c ---

def safe_calculator():
    try:
        # Taking input from user
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
        
        # Calculation logic
        result = num1 / num2
        print(f"Success! The answer is: {result}")

    except ValueError:
        # Handles cases where user enters text instead of numbers
        print("Error: Invalid input! Please enter numbers only.")

    except ZeroDivisionError:
        # Handles division by zero
        print("Error: You cannot divide a number by zero.")

    except Exception as e:
        # Catch-all for any other unexpected errors
        print(f"An unexpected error occurred: {e}")

    finally:
        # This always executes
        print("Calculation attempt finished.")

if __name__ == "__main__":
    safe_calculator()