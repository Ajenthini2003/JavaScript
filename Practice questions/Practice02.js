//Convert a negative number to positive in JavaScript
//Method 01 Multiplying by -1


function convert_positive(a){
    if(a<0){
      a=a*-1;  
    }
    return a;
}
let n=-10;
let m=6;

console.log(convert_positive(n));
console.log(convert_positive(m));

//Method 2: Using Math.abs()
let x=-30;
let y=-45;
x=Math.abs(x);
y=Math.abs(y);
console.log(x);
console.log(y);

//Method 3: adding a minus sign
function convertPositive(a){
    return a < 0 ? -(a) : a ;
}
let w = -10;
let z = 3;
w=convertPositive(w);
z=convertPositive(z);
console.log(w);
console.log(z);

//Method 5: Using Math.sqrt()
function convertToPositive(number){
  return Math.sqrt(Math.pow(number,2));
}
const negativeNumber = -7;
const positiveResult=convertToPositive(negativeNumber);
console.log(positiveResult);












