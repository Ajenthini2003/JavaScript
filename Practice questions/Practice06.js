//Generating all combinations of a string in JavaScript 
let possibleCombinations = (str) => {
    let Combinations=[];
    for (let i=0;i<str.length;i++){
        for(let j=0;j<str.length;j++){
            Combinations.push(str.slice(i,j));
        }
    }
    return Combinations;
}
console.log(possibleCombinations('aji'));