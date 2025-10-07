let rows=5;

for(i=0;i<rows; i++){
    let spaces=' '.repeat(i);
    let stars='*'.repeat(rows-i);
    let triangle=spaces+stars;
    console.log(triangle);
}