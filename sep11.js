

function tenfive(rows,cols){
    let matrix=[];
    for (let i=0;i<mat.length;i++){
        let row=[];
        for(let j=0;j<cols;j++){
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}

let newmat=tenfive(10,5);
console.log(newmat);
