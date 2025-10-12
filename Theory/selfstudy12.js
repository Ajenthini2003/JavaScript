/*//******Multiple ways to clone an array in Javascript*****

const { use } = require("react");

//1.spread operator
let originalArray=[1,2,3];
let cloneArray=[...originalArray];
console.log(cloneArray);

//2.slice operator
let cloneArray1=originalArray.slice();
console.log(cloneArray1);

//3.concat method
let cloneArray2=[].concat(originalArray);
console.log(cloneArray2);

//4.from method
let cloneArray3=Array.from(originalArray);
console.log(cloneArray3);

//5.JSON.parse(),JSON.srtingfy()
let cloneArray4=JSON.parse(JSON.stringify(originalArray));
console.log(cloneArray4);

//*** Exploring the different ways to ceate objects in Javascript   ****
//1.object literal notation method
const student={
    fullName:"Ram",
    father:"Sam",
    age:22,
    address:"Batticaloa road",
    city:"Batticaloa",
    about:function(){
        return '${this.fullName} is from ${this.city}';
    },
    eligiblity: function () {
        return this.age >= 18;
    },
};
console.log(student);
console.log(student.about());

//2.factory function
function addStudents(fullName,father,age,address,city){
    const user={};
    user.fullName=fullName;
    user.father=father;
    user.age=age;
    user.address=address;
    user.city=city;
    user.about=function () {
        return '${this.fullName} is from ${this.city}';
    };

    user.eligiblity=  function () {
        return this.age >= 18;
    };
    return user;
}

console.log(addStudents("Papu","Sanojan",22,"Sathrukondan road","Batticaloa"));
*/
//3.prototype inheritence
const studentMethod={
    about:function () {
        return '${this.fullName} is from ${this.city}';
    },
    eligiblity:function () {
        return this.age >= 18;
    },
}
function addStudents(fullName,father,age,address,city){
    const user=Object.create(studentMethod);
    user.fullName=fullName;
    user.father=father;
    user.age=age;
    user.address=address;
    user.city=city;
   

    return user;
}

console.log(addStudents("Papu","Sanojan",22,"Sathrukondan road","Batticaloa"));
console.log(addStudents("Makenthiran","Ajenthini",22,"Sarvodaya road","Batticaloa"));



















































