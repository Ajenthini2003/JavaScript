//question.1
var number="21";
function allNumbers(){
    if(number>"0"){
        return"positive";

    }
    else if(number<"0"){
        return"negative";
    }
    else if(number=="0"){
        return"zero";
    }
}

console.log(allNumbers(number));
    


//question.2
var age="21";
function peopleAge(){
    if(age>"18"){
        return"You can vote";

    }
    else if(age<"18"){
        return"You cant vote";
    }
   
}

console.log(peopleAge(age));
    
//question.3
var number="21";
function checkEvenodd(){
    if(number/2=="0"){
        return"number is even";

    }
    else {return"number is odd";

    }
        
    
   
}

console.log(checkEvenodd(number));

//question.5

var number="21";
function checkdividebyFive(){
    if(number/5=="0"){
        return"number can divide by five";

    }
    else {return"number can not divide by five";

    }
        
    
   
}
console.log(checkdividebyFive(number));

//question5
    
    


let num1 = 25;
let num2 = 40;
let num3 = 32;
function largestNumber(){
    if(num1 >= num2 && num1 >= num3){
        return"num1 is largest";

    }
    else if(num2 >= num1 && num2 >= num3){
        return"num2 is largest";
    }
    else{
    largest = num3;
}
}

console.log(largestNumber(number));

//check a year is leap or not






char=age;
functioncheckVowels(char){
    if(char=='a'|| char=='e'||char=='i'||char=='o'||char=='u'||){
        return "its vowel"
    }
    else {return"its consonant"}
}