//Using parseFloat() and toFixed() method
let value = parseFloat('3.5') + parseFloat('6.8');
console.log("3.5+6.8=" +value);

function addTwoNumbers(){
    console.log("3.544+6.8555="+(parseFloat('3.544')+parseFloat('6.8555')).toFixed(3));
    
}
addTwoNumbers();


//Using parseFloat() and Math.round() method
let value2=parseFloat('3.5') +parseFloat('6.8');
console.log("3.5+6.8=" +value2);

function addTwoNumberRoundedMethod(){
    console.log("3.5+6.8="+Math.round((parseFloat('3.5')+parseFloat('6.8'))*100)/100);
    
}

 addTwoNumberRoundedMethod()


//Using Number() and Intl.NumberFormat method
let sum3=Number('3.5555')+Number('6.888');
console.log(sum3);



let sum=Number('3.5')+Number('6.8');
let formatteSum = new Intl.NumberFormat('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2}).format(sum);

console.log("3.5+6.8="+formatteSum);
