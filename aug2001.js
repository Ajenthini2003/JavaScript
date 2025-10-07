
var number=7;
function primeNumber(number){
    if(number<=1){
        return"num is not prime";

    }
    if(number==2){return"number is prime"}
   else if(number/2==0){return"number is not prime"}
    if(number==3){return"number is prime"}
    else if(number/3==0){return"number is not prime"}
    if( number==5){return"number is prime"}
      else if(number/5==0){return"number is not prime"}
       if( number==7){return"number is prime"}
        else if(number/7==0){return"number is not prime"}
}
console.log(primeNumber(number));


//A shop gives discounts based on  purchase amount:
//if amount >5000 20% discount
//else if amount>2000 10% discount
//else no discount

  
  // Define the function to calculate final price
  var amount=4000;
function calculateDiscount(amount) {
    if (amount > 5000) {
        return amount * 0.80; 
    }
    if (amount > 2000) {
        return amount * 0.90; 
    } else {
        return amount;
    }
}
console.log(calculateDiscount(amount));


//write a  program to check whether the  person's BMI shows  under weight or normal or over weight orobese
// Get user input
var weight = 42;
var height = 155;

var bmi=weight / (height * height)



function parsetFloat( bmi = weight / (height * height)){
    if (bmi < 18.5) {return "your are underweight "}
    
else if (bmi >= 18.5 && bmi < 24.9) {
    return("You have a normal weight.");
} else if (bmi >= 25 && bmi < 29.9) {
    return("You are overweight.");
} else if(bmi >= 25 && bmi < 29.9){
 return("You are obese.");
}
}

console.log(parsetFloat(bmi));


//Question 4
var marks=60;
function marksCal(marks){
    if (marks>=89&&marks<=100){return "A"}
    
    if (marks>=75&&marks<=89) {
        return "B";  } 
    if (marks>=50&&marks<=74)
        {return "C"}
    if (marks>=0&&marks<=49) {
        return "F"; 
    }
    else{return "invalid"}
      
    
}
console.log(marksCal(marks));
