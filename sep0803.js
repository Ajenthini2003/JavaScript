let num=87609;
function getreverseNumber(num){
    let revNum=0;
    while(num>0){
        revNum=(revNum*10)+(num%10);
        console.log(revNum)
        num=Math.floor(num/10);
    }
         return revNum;
    
}
console.log("The reverse number of "+num+" is "+getreverseNumber(num))


  


var array1=[];
function getNumbers(arr,count){
    for(let i=0;i<count;i++){
        arr[i]=Math.floor(Math.random()*1000)
    console.log(arr[i])
}
return arr;
}
console.log(array1,25);


function generateRandomArray() {
  let arr = [];

  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(randomNum);
  }

  return arr;
}


function sumRandomArray(arr) {
    l
  const length = 10; // Set array length
  const randomArray = Array.from({ length }, () =>
    Math.floor(Math.random() * 100) // Random numbers from 0 to 99
  );

  console.log("Random Array:", randomArray);

  const sum = randomArray.reduce((acc, val) => acc + val, 0);

  console.log("Summation:", sum);
}

sumRandomArray();


function findRandomArray(){
     let arr=6
    for(let i=0;i<arr.length;i++)
        sum+=arr[i];
        return sum;
}
console.log("The sum of array of is"+findRandomArray(addNumbers(array1,30)));
console.log(array1);



function analyzeRandomArray() {
  const length = 20; // Length of array
  const randomArray = Array.from({ length }, () =>
    Math.floor(Math.random() * 10) // Random numbers between 0 and 9
  );

  console.log("Random Array:", randomArray);

  const frequency = {};

  // Count occurrences
  randomArray.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  console.log("Number Frequencies:");
  for (let num in frequency) {
    console.log(`Number ${num} appears ${frequency[num]} time(s)`);
  }
}

analyzeRandomArray();



function RandomeSame(){
    let length=20;
    let randomArray=Array.from
}

let array=[]
function generateArrayNumbers(){
    let length=Math.floor(Math.random()*10+2);
    let arr=[];
    for(let i=0;i<length;i++);
    arr
}



array1=generateArrayNumbers();
function checkUniqueNumbers(arr){
    let uniqueNumbersArray=arr [0];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<uniqueNumbersArray.length;j++){
            if(uniqueNumbersArray[j] !=arr[i])
                uniqueNumbersArray.push(arr[i])
        }
    }
    console.log(uniqueNumbersArray)
}
checkUniqueNumbers(generateArrayNumbers());