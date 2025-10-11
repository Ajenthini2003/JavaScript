/*
cancatenation- joining two strings*/ 
//cancatenation 
let first_name="Archana";
let last_name="Sanojan";

let c=first_name+" "+last_name;
console.log("cancatenation:"+c);

//concat
d=first_name.concat(' ',last_name);
console.log("concat:" +d);

//append
e="Archana ";
e+="Sanojan";
console.log("Append:"+e);

//Escaping
c='She can\'t run';
console.log(c);

//length
c=first_name.length;
console.log("length:"+c);

//Upper case
c=first_name.toUpperCase();
console.log("Uppercase : "+c);

//Lower case
c=last_name.toLowerCase();
console.log("Upper case : " +c);

//index
c=first_name.indexOf('n');
console.log("index of u:"+c);

//last index
c=last_name.lastIndexOf('n');
console.log("Last index of n:"+c);

//
c=first_name.charAt(1);
console.log("charector at 1:"+c);

c=first_name.charCodeAt(1);
console.log("charector at 1:"+c);

//substring
let text="0123456789";
c=text.substring(0,4);
c=console.log("Substring : "+c);

c=text.substring(4);
console.log("substring:"+c);

c=text.substring(25,30);
console.log("substring invalid length:"+c);

//slice
c=text.slice(2,4);
console.log("slice:"+c)


c=text.slice(4,2);
console.log("slice:"+c);

//split in JS
let a="i am an engineer";
c=a.split(" ");
console.log("split : "+c);
console.table(c);

//reolace in JS
a=" I am from Sri Lanka";
console.log("Before replace:"+a);
c=a.replace('Sri','island');
console.log("after replace:"+c);

//includes in JS
const pets=['cat','dog','parrot'];
console.log(pets.includes('rat'));
console.log(pets.includes('cat'));

//trim in JS
a=" archana ";
console.log("Before trim: "+a.length);
a=a.trim();
console.log("After trim : "+a.length);

//padStart padEnd
a="5";
a=a.padStart(4,0);
console.log(a);

a="5";
a=a.padEnd(4,'$');
console.log(a);

