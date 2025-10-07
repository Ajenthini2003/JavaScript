
let num1,num2,num3;
num1=4
num2=6
num3=7
function summation(a,b){
    let sum=(num1+num2);
    return sum;

}
let output;
output=summation(summation(num1,num2),summation(num3,num4));
console.log(output);


function checkPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

// Example usage:
checkPalindrome("level");  // true
checkPalindrome("hello");  // false



