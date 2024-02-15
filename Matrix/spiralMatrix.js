/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


const spiralOrder = (matrix) => {
    const result = [];

    while (matrix.length > 0) {
        // Traverse top row
        result.push(...matrix.shift());

        // Traverse right column
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length > 0) {
                result.push(matrix[i].pop());
            }
        }

        // Traverse bottom row
        if (matrix.length > 0) {
            result.push(...matrix.pop().reverse());
        }

        // Traverse left column
        for (let i = matrix.length - 1; i >= 0; i--) {
            if (matrix[i].length > 0) {
                result.push(matrix[i].shift());
            }
        }
    }

    return result;
}

// Example usage:
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(spiralOrder(matrix2)); // Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
