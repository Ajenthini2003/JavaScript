//question 01
//Search for an element in the array and return its index.

function findElement(arr, target) {
    return arr.indexOf(target);
}


const myArray = [100,120,400,590];
const target = 590;
const index = findElement(myArray, target);
console.log(index);


//question 2
//Calculate the average of the elements.
function findAverage(array) {
    if (array.length === 0) return 0; 

    let sum = 0;
    for (let i =0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}


const numbers = [200,400,340,440,100];
const average = findAverage(numbers);
console.log("Average:", average);  

//question 3
//Write a function reverseArray() that reverses the order of the elements.

function reverseArray(arr) {
    return arr.reverse();
}

// Example
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
console.log(numbers);         // Output: [5, 4, 3, 2, 1] (original is changed)


//question 4
def exists(element):
    data = [1, 2, 3, 4, 5]  # You can modify this list as needed
    if element in data:
        print(True)
    else:
        print(False)

# Example usage:
exists(3)  # Output: True
exists(7)  # Output: False


funtion findElement(Array,target){
    return Array.indexof(target);
}

//question 5
//Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not.
function checkPalindrome(word) {
    word = word.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

//question 6
//Write a function sumOfDigi(number) that prints the sum of the given number.
function sumOfDigi(number) {
    let sum = 0;
    let numStr = number.toString();

    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    console.log(sum);
}

/
sumOfDigi(1234);  
sumOfDigi(907);   
