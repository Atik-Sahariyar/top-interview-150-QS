/**
 * Definition for a QuadTree node.
 * function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
 *    this.val = val === undefined ? false : val;
 *    this.isLeaf = isLeaf === undefined ? false : isLeaf;
 *    this.topLeft = topLeft === undefined ? null : topLeft;
 *    this.topRight = topRight === undefined ? null : topRight;
 *    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
 *    this.bottomRight = bottomRight === undefined ? null : bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */

const construct = (grid) => {
    if (!grid || grid.length === 0) return null;

    const n = grid.length;

    const isLeaf = (r, c, size) => {
        const val = grid[r][c];
        for (let i = r; i < r + size; i++) {
            for (let j = c; j < c + size; j++) {
                if (grid[i][j] !== val) return false;
            }
        }
        return true;
    };

    const constructTree = (r, c, size) => {
        if (isLeaf(r, c, size)) {
            return new Node(grid[r][c], true, null, null, null, null);
        } else {
            const half = size / 2;
            return new Node(
                false,
                false,
                constructTree(r, c, half),
                constructTree(r, c + half, half),
                constructTree(r + half, c, half),
                constructTree(r + half, c + half, half)
            );
        }
    };

    return constructTree(0, 0, n);
};