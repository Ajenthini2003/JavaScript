# Function to calculate the area of a triangle
def calculate_triangle_area(base, height):
    area = 0.5 * base * height
    return area

# Main function
def main():
    # Variables to store dimensions of the triangle (in cm)
    base = 10  # Example value for base in cm
    height = 5  # Example value for height in cm

    # Calculate the area by calling the function
    area = calculate_triangle_area(base, height)

    # Display the result
    print(f"The area of the triangle is {area} square centimeters.")

# Call the main function
main()



