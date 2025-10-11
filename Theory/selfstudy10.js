//shift()
let students=["kumar","rajesh","pallavi","nova"];
console.log("before shift : "+students);
let element=students.shift();
console.log("after shift : "+students);
console.log("remove element : "+element);

console.log("before shift : "+students);
element=students.shift();
console.log("after shift : "+students);
console.log("remove element : "+element);


//unshift() i JS
//add first element at start
students=["kumar","rajesh","pallavi","nova"];
console.log("before unshift : "+students);
let len = students.unshift("tiyta");
console.log("length:" + len);
console.log("after unshift:"+students);
len=students.unshift("riya","revi");
console.log("length:" + len);
console.log("after unshift:"+students);

//indexOf() in JS
students=["kumar","rajesh","pallavi","nova"];
let i=students.indexOf("pallavi");
console.log("index:"+i);

let user="sanojan archana";
let findIndex=user.indexOf("n");
console.log("Index:"+findIndex);

 findIndex=user.indexOf("n",4);
console.log("Index:"+findIndex);


//lastIndexOf() in JS
let users="sanojan archana";
let findIndex1=user.lastIndexOf("n");
console.log("last Index:"+findIndex1);


//Every & some in JS
n=[12,35,4,46,68];
let result=n.every((value)=>{
    return value%2==0;
});
console.log(result);

 result=n.some((value)=>{
    return value%2==0;
});
console.log(result);



const users1=[
    { name: "Ram",age: 25},
    { name: "Tiya",age: 35},
    { name: "Raja",age: 45},
    { name: "Sam",age: 15},
];

function isEligible(element){
    return element.age>=18;
}

result =users1.every(isEligible);
console.log("every eligible:", result);

result =users1.some(isEligible);
console.log("some eligible:", result);




