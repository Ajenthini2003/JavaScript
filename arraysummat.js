//To create a matrix of size rows x cols, and fill it with random numbers between 2 and 101.
function generateMatrix(rows, cols) {
    let mat = Array.from({ length: rows }, () => new Array(cols).fill(0));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            mat[i][j] = Math.floor(Math.random() * 100 + 2);
        }
    }
    return mat;
    
}

//To print the 2D matrix row by row in a readable format
function printMatrix(mat) {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i]);
        
    }
}
//To add two matrices element-wise and return the resulting matrix.
function SumofMatrices(mat1, mat2) {
    let sumMatrix = Array.from({ length: mat1.length }, () => new Array(mat1[0].length).fill(0));

    for (let i = 0; i < mat1.length; i++) {
        for (let j = 0; j < mat1[0].length; j++) {
            sumMatrix[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return sumMatrix;
}
let row = 3;
let col = 4;

let mat1 = generateMatrix(row, col);
let mat2 = generateMatrix(row, col);

console.log("Matrix 1 is:");
printMatrix(mat1);

console.log("Matrix 2 is:");
printMatrix(mat2);

console.log("Summation of both matrices is:");
let sumMat = SumofMatrices(mat1, mat2);
printMatrix(sumMat);

