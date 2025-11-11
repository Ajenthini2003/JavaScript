//Traditional function
function main(){
    let num1=5;
    let num2=4;

    console.log("The summation of two numbers "+traditionalwriting(num1,num2))
}

function traditionalwriting(num1,num2){
    return num1+num2;
}
main();


//Arrow function
function main() {
    let num1 = 5;
    let num2 = 4;

    // Calling the arrow function with parameters
    console.log("The summation of two numbers: " + traditionalwriting(num1, num2));
}

// Arrow function version
const traditionalwriting = (num1, num2) => num1 + num2;

main();
