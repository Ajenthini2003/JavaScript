let mat1=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
let mat2=[
    [2,3,4],
    [3,4,5],
    [4,5,6]
];
let addmat=[];
for (let i=0;i<mat1.length;i++){
    let r="";
    for(let j=0;j<mat1[i].length;j++){
        r +=mat1[i][j]+mat2[i][j]+"";
    }
    addmat.push(r.trim());
}
console.log(r)