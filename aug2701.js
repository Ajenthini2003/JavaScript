//uper let triangele
//*
//** 
//*** 
//**** 
//***** 
let i=5;
for(let j=1;j<=i;j++){
    let pattern="";
for(let k=1;k<=j;k++){
    pattern+="* ";              //pattern=+pattern"* ""
}
console.log(pattern);
}


for(let j=1;j<=i;j++){
    let pattern="";

console.log(pattern.repeat(j));
}


//repeat
// Reverse right-angled triangle star pattern

let rows = 5;

for (let i = rows; i >= 1; i--) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}

//top right triangle//
let rows=5;
for(let i=1;i<=rows;i++){
    let space=' ',star="* ";
    console.log(space.repeat(rows-1)+star.repeat(i));
}