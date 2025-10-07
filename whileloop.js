let i=0;
while(i<3){
    console.log("number:",i);i++
}



//print raandom numbers
function addNumbers(){
    let sum=0;
    let count=0;
    let randomNumber=0;
    while(randomNumber!=3){
        randomNumber=Math.floor(Math.random()*10);
        console.log(randomNumber);
        sum+=randomNumber;
        count++
    }

    console.log("Total value is:"+sum);
console.log("Total count is:"+sum);
}



addNumbers();