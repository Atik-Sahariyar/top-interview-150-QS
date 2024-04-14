/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const searchMatrix = (matrix, target) => {
    let totalRow = matrix.length - 1;
    let totalColumns = matrix[0].length;

    let row = 0;
    let column = totalColumns - 1;

    while (row <= totalRow && column >= 0) {
        if (matrix[row][column] === target) {
            return true
        }
        else if (matrix[row][column] > target) {
            column--
        }
        else {
            row++
        }
    }

    return false;

};