//top right triangle//
let rows=5;
for(let i=1;i<=rows;i++){
    let space=' ',star="* ";
    console.log(space.repeat(rows-i)+star.repeat(i));
}




//***** 
//**** 
//*** 
//** 
//*
// Reverse bottom-left triangle star pattern

let rows = 5;

for (let i = rows; i >= 1; i--) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}
