//Primitive and reference data types
let a=10;
let b=10;
console.log("A:" +a);
console.log("B:"+b);
a=25;
console.log("A:" +a);
console.log("B:"+b);

//Reference data type(object)
let user={name:"Archana",age:22};
let user2=user;
console.log("user:" ,user);
console.log("user2:",user2);

console.log("user:" +user);
console.log("user2:"+user2);

user.age=25;
console.log("user:" ,user);
console.log("user2:",user2);

//Reference data type(array)
let arr1=[10,20,30];
let arr2=arr1;
console.log("Array 1 :",arr1);
console.log("Array 2 :",arr2);
arr1.push(55);
console.log("Array 1 :",arr1);
console.log("Array 2 :",arr2);

//Object Clone use Spread and Object.assign() in Javascript.
const obj1={ a:1, b:2 };
const obj2={ c:4, d:5 };
const obj3=Object.assign({},obj1,obj2);
obj2.c=67;
console.log(obj3);

//In spred method
const obj4={...obj1,...obj2};
console.log(obj4);











