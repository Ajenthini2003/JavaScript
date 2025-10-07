//Write a JavaScript program to calculate the interest on a fixed deposit.
//Create a function named interestCalculator(amount, interestRate) that returns the annual interest of a given amount using a monthly interest rate.
//Call this function inside the main function to calculate the interest.


function interestCalculator(amount, interestRate) {
    let monthlyInterest = (amount * interestRate) / 100;
    let annualInterest = monthlyInterest * 12;
    return annualInterest;
}


function main() {
    let principalAmount = 20000; 
    let monthlyRate = 5;       

    let annualInterest = interestCalculator(principalAmount, monthlyRate);

    console.log(" interest");
}


main();
