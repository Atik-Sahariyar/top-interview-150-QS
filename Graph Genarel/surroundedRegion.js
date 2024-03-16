/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve =  (board) => {

    // Start on the perimeter
    for (let r = 0; r < board.length; r++) {
        dfsInvalidate(board, r, 0);
        dfsInvalidate(board, r, board[0].length - 1);
    }

    for (let c = 0; c < board[0].length; c++) {
        dfsInvalidate(board, 0, c);
        dfsInvalidate(board, board.length - 1, c);
    }

    // Flip the valid Os
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] == 'O') board[r][c] = 'X';
        }
    }

    // Return invalid Os to original form
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] == 'Y') board[r][c] = 'O';
        }
    }

};

function dfsInvalidate(board, r, c) {
    // Out of bounds
    if (r < 0 || r >= board.length ||
        c < 0 || c >= board[0].length) {
        return false;
    }

    // Check if X, or Y (invalid O)
    if (board[r][c] == 'X' || board[r][c] == 'Y') {
        return false;
    }

    // Anything here should be O
    board[r][c] = 'Y';
    dfsInvalidate(board, r - 1, c);
    dfsInvalidate(board, r + 1, c);
    dfsInvalidate(board, r, c + 1);
    dfsInvalidate(board, r, c - 1);
}