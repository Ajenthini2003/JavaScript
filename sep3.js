/*Search for an element in the array and return its index.
Calculate the average of the elements.
Write a function reverseArray() that reverses the order of the elements.
Write a function exists(element) that prints true if the element is present, otherwise false.
Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not.
Write a function sumOfDigi(number) that prints the sum of the given number.*/


function existsElement(element){
    let numbers=[1,2,3,4];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]===element)
            {console.log(true);
                return
            }
        }
         console.log(false);
}
existsElement(4);

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





function sumOfDigi(number) {
    let digits = number.toString();
    let total = 0;
    for (let i = 0; i < digits.length; i++) {
        total += parseInt(digits[i]);
    }
    console.log(total);
}

sumOfDigi(1234);  // Output: 10







function sumOfDigi(number) {
    let numStr = number.toString(); // Convert number to string
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        // Make sure to skip if character is not a digit (e.g., negative sign)
        if (!isNaN(numStr[i])) {
            sum += parseInt(numStr[i]);
        }
    }

    console.log(sum);
}

sumOfDigi(1234);     // Output: 10  (1 + 2 + 3 + 4)
sumOfDigi(567);      // Output: 18  (5 + 6 + 7)
sumOfDigi(-456);     // Output: 15  (4 + 5 + 6)

