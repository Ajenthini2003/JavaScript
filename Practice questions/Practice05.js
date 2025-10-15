//Convert a string into a integer without using parseInt() function in JavaScript 
//Method 1:Using coersion

function convertStoI(){
    let a="100";
    let b=a*1;
    console.log(typeof(b));
    let d="3 34 12"*1;
    console.log(typeof(d));
}
convertStoI()

//Method 2: Using the Number() function
function convertStoI2(){
    const a ="100";
    const b=Number(a);
    console.log(typeof(b));
    const d="34 56 7"*1;
    console.log(typeof(d));
}
convertStoI2();

//Method 3: Using Math floor() Method
function convertStoI3(){
    let a= "100";
    let b=Math.floor(a);
    console.log(typeof(b));
}

convertStoI3();

//Method 4: Using Math.round() Function
function convertStoI4(){
    let a="100.6";
    let b=Math.round(a);
    console.log(typeof(b));
}
convertStoI4();












