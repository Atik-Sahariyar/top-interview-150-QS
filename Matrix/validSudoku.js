/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board)  => {
    const rows = [];
    const columns = [];
    const boxes = [];

    for(let i = 0; i < 9; i++){
        rows[i] = new Set();
        columns[i] = new Set();
        boxes[i] = new Set()

    }


    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){

            const value = board[i][j];
            if(value !== '.'){
                if(rows[i].has(value) || columns[j].has(value) || boxes[Math.floor(i/3)*3 + Math.floor(j / 3)].has(value)){
                    return false
                } else {
                    rows[i].add(value);
                    columns[j].add(value);
                    boxes[Math.floor(i/3)*3 + Math.floor(j/3)].add(value)
                }
            }
        }
    }

    return true
};