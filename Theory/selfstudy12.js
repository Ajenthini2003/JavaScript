//******Multiple ways to clone an array in Javascript*****

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






















































