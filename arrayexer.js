function main(){
    let row=10;
    let col=5;
    let matrix=tenfive(row,col);
    console.log("\nYour  generated matrix is:")
    printMatrix(matrix);
    console.log("\nThe maximum values in each row in given :")
    findMatrixineachrow(matrix)
}
main();




function tenfive(row,col){
    let mat=Array.from({length:row},()=>new Array(col).fill(0));
        for(let i=0;i<row;i++){
        mat[i]=[];
        for(let j=0;j<col;j++){
            mat[i][j]=Math.floor(Math.random()*100+2)
        }
    }
    return mat;
}

function printMatrix(mat){
    for(let i=0;i<mat.length;i++){
        console.log(mat[i]);
    }
}

function findMatrixineachrow(mat){
    for(let i=0;i<mat.length;i++){
        let maxValue=mat[i][0];
        for(let j=0;j<mat[0].length;j++){
            if(maxValue<mat[i][j])
                maxValue=mat[i][j];
        }
        console.log("the maximum value in row:"+(i+1)+"is"+maxValue)
    }
}




