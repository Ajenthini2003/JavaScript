//create an array named numbers
//inizialize it as an empty array
//add an element at a specific index in the array
//write a function addAnelement(index,element) that inserts an element at a given index
//print all elements of the array
//write a function printAllelements ()that print the entire array
//4.print the selected range of elements in the early
//write a function printRange(start,end)that prints elements from index starts to end
//5.add a new element at the end of array
//write a function addleast(element)that appends an element to the early
//6.remove an element at a specifip index
//
//find the largest number in the array






function printAllelements(numbers){
console.log(numbers);
}

printAllelements(numbers);


function printRange(numbers,start,end){
    if (start<0 ||end>=numbers.lenth){
        console.log("invalid start and end")
    }
    else {
        for(let i=start;i<=end;i++)
            console.log(numbers[i]);
    }
}
printRange(numbers,2,5);




function addLeast(array, element) {
  array.push(element);
  return array;
}

let result = addLeast([1, 2, 3], 4);
console.log(result); // Output: [1, 2, 3, 4]










































