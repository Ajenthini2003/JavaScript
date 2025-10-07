
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
let weight = parseFloat(prompt("42(kg):"));
let height = parseFloat(prompt("155(m):"));

// Calculate BMI
let bmi = weight / (height * height);

// Display BMI with 2 decimal places
alert("Your BMI is: " + bmi.toFixed(2));

// Determine the BMI category
function parsetFloat(){
    if (bmi < 18.5) {
    alert("You are underweight.");
} else if (bmi >= 18.5 && bmi < 24.9) {
    alert("You have a normal weight.");
} else if (bmi >= 25 && bmi < 29.9) {
    alert("You are overweight.");
} else {
    alert("You are obese.");
}
}

console.log(calculateDiscount(bmi));
