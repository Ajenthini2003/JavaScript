
function tenfive(row,col){
    let mat=[];
    
    
    for(let i=0;i<row;i++){
        mat[i]=[];
        for(let j=0;j<col;j++)
        mat[i][j]=Math.floor(Math.random()*100+2)
    }
    
    return mat;
}

function printMatrix(mat){
    
    for(let i=0;i<mat.length;i++){
   console.log(mat[i])
}

}
let row=10;
    let col=5;
    let mat=tenfive(row,col)
console.log("Matricx is");
printMatrix(mat);




