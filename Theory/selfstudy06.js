//function with arbitrary arguments
function sum(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];   //total=total+arguments
    }
    return total;
}
console.log(sum(12,12,12,12));

//function as Expressions
const add=function(a,b){
    return a+b;
}
console.log(add(45,56));

//arrow function
//const functionName = (parameters) =>{ function body };
const addParameters=(a,b) =>{return a+b};
console.log(addParameters);
console.log(addParameters(23,45));

//1.ARROW FUNCTION WITH MAP

let numbers=[1,2,3,4,5];
console.log(numbers);
let doubleNumber=numbers.map(number=>number*2);
console.log(doubleNumber);

//2.Using arrow functions with filter():
let words=['apple','banana','orange','grape'];
console.log(words);
let filteredWords=words.filter(word=>word.length>5);
console.log(filteredWords)

//3.Using arrow functions with reduce():
console.log(numbers);
let total=numbers.reduce((sum,number)=>sum+number,0);
console.log(total);






























