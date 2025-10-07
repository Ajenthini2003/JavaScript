function main(){
    let A=[[1,3,2],[5,1,2]];
let B=[[1,2,3,4],[4,1,1,2],[2,3,4,1]];
let output=matrixmultiplication(A,B);
printMatrix(output);
}
main();

function CanDoMultiplication(a,b){
    if(a[0].length==b.length)
        return true;
    else
        return false;
}

function matrixmultiplication(a,b){
    if(CanDoMultiplication(a,b)){
        let row=a.length;
        let col=b[0].length;
        let colRow=b.length;
        let sum=0;
        let output=Array.from({length:row},()=>new Array(col).fill(0));

        for(let i=0;i<row;i++){
            for(let j=0;j<col;j++){
                for(let k=0;k<colRow;k++){
                    sum+=(a[i][k]*b[k][j]);
                }
                output[i][j]=sum;
            }
        }
        return output;
    }
    else{
        console.log("cannot do this multiplication")
        return 0;

    }
} function printMatrix(a){
    for(let i=0;i<a.length;i++){
        console.log(a[i]);
    }
}