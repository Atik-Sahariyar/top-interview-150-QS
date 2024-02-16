/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
  
    // Arrays to track which rows and columns need to be set to zero
    const zeroRows = Array(m).fill(false);
    const zeroCols = Array(n).fill(false);
  
    // Iterate through the matrix and mark the rows and columns with zeros
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 0) {
          zeroRows[i] = true;
          zeroCols[j] = true;
        }
      }
    }
  
    // Set entire rows to zero
    for (let i = 0; i < m; i++) {
      if (zeroRows[i]) {
        for (let j = 0; j < n; j++) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Set entire columns to zero
    for (let j = 0; j < n; j++) {
      if (zeroCols[j]) {
        for (let i = 0; i < m; i++) {
          matrix[i][j] = 0;
        }
      }
    }
  };
  
  // Example usage:
  const matrix1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  
  setZeroes(matrix1);
  console.log(matrix1);
  
  const matrix2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ];
  
  setZeroes(matrix2);
  console.log(matrix2);
  