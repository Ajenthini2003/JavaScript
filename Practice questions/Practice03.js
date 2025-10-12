//Find quotient and remainder by dividing an integer in JavaScript

//Example 1: This example uses the Math.floor() function to calculate the divisor. 
let a=41;       //quotient-a
let b=4;          //remainder-b

function dividingFunction(){
    console.log("quotient="+Math.floor(a/b));  //Math.floor - getting integer below.
    console.log("remainder="+a%b);     //remainder operator %
}

dividingFunction();

//Example 2: This example uses the binary ~~ operator to calculate the divisor.
let m=34;
let n=3;

function usingNOTwiseoperator(){          
    let num= ~~(m/n);                       //~~ → Double NOT bitwise operator
    console.log("quotient = " + num);
    console.log("remainder = " + m % n );
}
usingNOTwiseoperator()


//Example 3:This example uses the right shift >> operator to calculate the divisor. 
let x=37;
let y=4;

function usingShiftOperator(){
    let number=(x/y) >> 0;
     console.log("quotient = " + number);
    console.log("remainder = " + x % y)
}

usingShiftOperator()







