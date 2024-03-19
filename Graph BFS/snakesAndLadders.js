/**
 * @param {number[][]} board
 * @return {number}
 */
const snakesAndLadders =  (board) => {

    const length = board.length;
    board = board.reverse();

    //a helper function to find coordinates of the respective square..
    const intToPos = (square) => {
        let row = Math.floor((square - 1) / length);
        let col = (square - 1) % length;
        if (row % 2) col = length - 1 - col;
        return [row, col];
    }

    //BESIC: BFS starts here..
    const queue = [[1, 0]];
    const visit = new Set();
    while (queue.length) {
        const [square, move] = queue.shift();
        //DICE is Rolled... [1-to-6]
        for (let i = 1; i <= 6; i++) {
            let nextSquare = square + i;
            const [R, C] = intToPos(nextSquare);

            // IF it's a SNAKE/LADDER
            if (board[R][C] !== -1) {
                nextSquare = board[R][C];
            }

            // IF it's the LAST SQAURE: we return moves it took
            if (nextSquare == length * length) return move + 1;

            // Add the V.first move-count it took us to reach this square
            if (!visit.has(nextSquare)) {
                visit.add(nextSquare);
                queue.push([nextSquare, move + 1])
            }
        }
    }

    //404: IF, no move possible..
    return -1;
};