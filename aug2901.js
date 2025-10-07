# Function to calculate factorial
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Input from the user
num = int(input("Enter a number: "))

print(f"\nFactorial series up to {num}:")

# Print factorial for each number from 1 to num
for i in range(1, num + 1):
    print(f"{i}! = {factorial(i)}")
