
//1.write a programme to print the factorial series for given Number
//2.write a recrusion function to print the factorial value of given number
//3.write a programme to print the factorial value of given number
//4.write a programme to fibonacci series up to a given number
//5.write a recrusive function to print the fibonacci value of given number

// Function to calculate factorial
// Function to print factorial series up to given number

function printFactorial(n) {
    if (n < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i; // Multiply factorial by i in each loop
    }

    console.log("Factorial of " + n + " is: " + factorial);
}

// Example usage:
let number = 6; // You can change this number to test with other values
printFactorial(number);




function printFibonacciSeries(find) {
    let a = 0, b = 1;


    console.log("Fibonacci series up to", find + ":");

    while (a <= find) {
        console.log(a); // Print current Fibonacci number
        let c = a + b;
        a = b;
        b = c;
    }
}

// Example usage:
let number = 50; // You can change thfis to any number
printFibonacciSeries(number);




