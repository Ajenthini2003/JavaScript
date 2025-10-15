//Flatten a Given Array up to Specified Depth in JavaScript
let arr=[1,[2,[3,[4,5],6],7],8,9,10];
console.log("original array:"+arr);


let flatArrOne = arr.flat(1);
console.log("array flattened to depth of 1:"+flatArrOne);

let flatArrTwo = arr.flat(2);
console.log("array flattened to depth of 2:"+flatArrTwo);

let flatArray = arr.flat(Infinity);
console.log("array flattened to depth of 1:"+flatArray);