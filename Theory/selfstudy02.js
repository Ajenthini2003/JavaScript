//Nullish coalescing operator(??)

const a=null??'No value';
console.log(a)

const b=null??45;
console.log(b);

//??=
const user={'name':'aji'};
console.log(user);
console.log(user.name);
console.log(user.city);
user.city??='batticaloa';
console.log(user.city);
console.log(user);


//iNCREMENT (++) or DECREMENT(--)
let c=10;
c++;                  //a=a+1
console.log(c); 


/*
PostFix Increment     a++
PreFix Decrement      ++a
*/ 
let x=3;
const y=x++;
console.log("X:",x,"Y:",y);

let i=3;
const j=i++;
console.log("i:",i,"j:",j)

//if,else if, else statement
let mark=75;
if(mark>=75 && mark<=100){
    console.log('grade A')
}
else if(mark>=65 && mark<=75){
    console.log('grade B')
}
else if(mark>=75 && mark<=100){
    console.log('grade V')
}
else if(mark>=55 && mark<=65){
    console.log('grade C')
}
else if(mark>=35 && mark<=55){
    console.log('grade S')
}
else{
    console.log('Fail')
}


//  Nested if statement
let english=45,tamil=28,maths=95;
let total=english+tamil+maths;
let avg=total/3;
console.log("total:"+total)
console.log("average:"+avg.toFixed(2))

if(maths>=35 && tamil>=35 && tamil>=35)
{console.log("Result:Pass")
    if(avg>90 && avg<=100){
        console.log("Grade: A")
    }
    else if(avg>80 && avg<=90){
        console.log("Grade:B")
    }
     else if(avg>70 && avg<=80){
        console.log("Grade:B")
    }
}
else{
    console.log("fail")

}

//sWITCH CASE
let num=5;
switch(num){
    case 1:
    console.log("one");
    break;
    case 2:
    console.log("two");
    break;
    case 3:
    console.log("three");
    break;
    default:
    console.log("invalid input");
    break;

}

//looping statement
//while loop
let k=1;
while(k<=10){
    console.log(k);
    k++
}

//Do while loop
let table=88;limit=5;i=1;

do
{
    console.log(table+"X"+i+"="+(table*i));
    i++;
}while(i<=limit);


//for loop
for(let i=1;i<=10;i++)
{
    console.log(i);
}

let arr=[];
for(let i=0;i<100;i+=2){
    arr.push(i);
}
console.log(arr);
console.log(arr[49]);


let nums=[];
for(let m=0;m<3;m++)
    {
        nums.push([]);
    for(let n=0;n<3;n++){
        nums[m].push(n);
    }
}
console.log(nums);