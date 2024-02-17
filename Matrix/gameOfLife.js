/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let map = new Map();
    const n = board.length;

   const countNeighbour = (i, j, board) => {
        let count = 0;
        const [l1, l2] = [i - 1, j - 1];
        const [u1, u2] = [i + 1, j + 1];
        for(let k = l1; k <= u1; k++){
            for(let l = l2; l <= u2; l++){
                if(k === i && l === j){
                    continue;
                }
                if(board[k] && board[k][l]){
                    count += Math.floor(board[k][l])
                }
            }
        }

        return count;
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < board[i].length; j++){
            map.set(i + "," + j, countNeighbour(i, j, board));
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < board[i].length; j++){
            let count = map.get(i + "," + j);
            if(board[i][j] === 1){
                if(count < 2 || count > 3){
                    board[i][j] = 0;
                }
            } else if(board[i][j] === 0 && count === 3){
                board[i][j] = 1;
            }
        }
    }


 
};