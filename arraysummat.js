
function generateMatrix(row,col){
    let mat=[];
    let mat =Array.from({length:rows},() => new Array(cols).fill(0));
    let rows=3;
    let cols=4;
    for(let i=0;i<mat.length;i++){
   mat[i][j]=Math.floor(Math.random()*100+2)
}
return mat;
}

function printMatrix(mat){
    
    for(let i=0;i<mat.length;i++){
   console.log(mat[i])
}
return mat;
}

function SumofMatrics(mat1,mat2){
    let sumMatrix=Array.from({length:mat1.length},() => new Array(mat1[0].length).fill(0));
    
    for(let i=0;i<mat.length;i++){
        let (j=0;j<mat1[0].length;j++){
            sumMatrix[i][j]=mat1[i][j]+mat2[i][j];
        }
  }
  return sumMatrix;
}

let row=3;
let col=4;
let mat1=generateMatrix(row,col);
let mat2=generateMatrix(row,col);

console.log("Matrix 1 is:");
printMatrix(mat1);
console.log("Matrix 2 is:");
printMatrix(mat2);

console.log("summation of both matrix is");
let sumMat=SumofMatrics(mat1,mat2);
printMatrix(sumMat);

