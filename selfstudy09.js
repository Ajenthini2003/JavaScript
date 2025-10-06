//Reverse in Javascript
const n=[1,2,3,4,5,6];
console.log("Before reverse : ", n);
n.reverse();
console.log("After reverse : ", n);

//array element with length property
const x={0:10,1:20,2:30,3:40, length: 4};
console.log(x);

Array.prototype.reverse.call(x);
console.log(x);


//Push in Javascript
let m=[1,2,3,4,5];
console.log(m);
console.log(m.push(60));
console.log(m);
console.log(m.push(45,56,78));
console.log(m);

let fruits=["apple"];
console.log(fruits);
fruits.push("banana","pineapple")
console.log(fruits);

//Merging two arrays
let user1=["ram","sam","ravi"];
let user2=["sanu","aji"];

user1.push(...user2);
console.log(user1);

//POP in Javascript
const users=["ram","sam","ravi","sanu","aji"]
console.log(users);
console.log(users.pop());
console.log(users);
