//Generating all combinations of a string in JavaScript 
//1.Approach 1: Use .push() and .slice() method
let possibleCombinations = (str) => {
    let Combinations=[];
    for (let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            Combinations.push(str.slice(i,j));
        }
    }
    return Combinations;
}
console.log(possibleCombinations('aji'));


//2.example-2
function getCombinations(str){
    let Combinations2=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            Combinations2.push(str.slice(i,j));
        }
    }
    return Combinations2;
}
console.log(getCombinations("nivi"));
























