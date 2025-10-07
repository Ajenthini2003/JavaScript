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




