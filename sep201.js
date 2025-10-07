
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
console.log("The Average of array is:", average);  


function Arrayreverse(array){
    let reverseArray=[];
    for(let i=0;i<length.array;i++){
        reversearray[i]=array[array.lenght-1-i];}

return reverseArray;
}
console.log("The original array values are"+arrayX);
console.log("The reverse array values are"+reverseArray(arrayX))
