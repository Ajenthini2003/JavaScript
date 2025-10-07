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





