function getFileExtension(){
    let fileName='2024.3.5_hello wrorl';
    let extension=fileName.split('.').pop();
    console.log('File extension:',extension);
}
    
getFileExtension();
     

function getFileExtension2(){
    let fileName='Assignment.pdf';
    let extension=fileName.substring('.');
    console.log('File extension :',extension);
}
getFileExtension2();



// JavaScript program to search a word in a 2D grid



function validCoord(x, y, m, n) {
    return (x >= 0 && x < m && y >= 0 && y < n);
}


function findWord(index, word, grid, x, y, dirX, dirY) {

   
    if (index === word.length) return true;

   
    if (validCoord(x, y, grid.length, grid[0].length) 
    && word[index] === grid[x][y])
        return findWord(index + 1, word, grid, x + dirX, y + dirY, dirX, dirY);

    return false;
}


function searchWord(grid, word) {
    let m = grid.length;
    let n = grid[0].length;

    let ans = [];

   
    let x = [-1, -1, -1, 0, 0, 1, 1, 1];
    let y = [-1, 0, 1, -1, 1, -1, 0, 1];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            
            for (let k = 0; k < 8; k++) {

                
                if (findWord(0, word, grid, i, j, x[k], y[k])) {
                    ans.push([i, j]);
                    break;
                }
            }
        }
    }

    return ans;
}

function printResult(ans) {
    for (let i = 0; i < ans.length; i++) {
        console.log("{" + ans[i][0] + "," + ans[i][1] + "}");
    }
}

const grid = [
    ['a', 'b', 'a', 'b'],
    ['a', 'b', 'e', 'b'],
    ['e', 'b', 'e', 'b']
];
const word = "abe";

const ans = searchWord(grid, word);

printResult(ans);
   