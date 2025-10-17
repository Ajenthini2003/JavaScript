/*You are required to read an integer value
from a user and display whether the given number is prime or not. Write a
JavaScript with the aid of function.


Write
a function that returns a random positive number in the range of 1 to 99,999.
Write
a function that returns whether the generated number is a prime number or not.
Execute
both functions in the main function.*/



function randomNumber(){
    for(let i=0;i<100000;i++){
        let num=Math.random;
        if(0<num<10000){
            return "it is a positive number"

        }
        else{
            return "it is not positive"
        }
    }
}
console.log(randomNumber);


function primeNumbers(number){
    let number=5;
    if(number%2==0){
        return "it is a prime number"
    }

    else if(number%3==0){
        return "it is a prime number"

    }
    else{
        return "it is not prime number"
    }
}

console.log(primeNumbers(5));

