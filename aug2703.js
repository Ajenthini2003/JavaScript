//***** 
// ****
//  ***
//   ** 
//    *

let rows = 5;

for (let i = 0; i < rows; i++) {
    let spaces = ' '.repeat(i);
    let stars = '*'.repeat(rows - i);
    let line = spaces + stars;
    console.log(line);
}
