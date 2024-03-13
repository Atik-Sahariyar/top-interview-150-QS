/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
    if (!root) return [];
    
    let result = [], q = [root], level = 0;
    
    while (q.length) {
        let size = q.length, currLevel = [];
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            currLevel.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        if (level % 2 === 1) currLevel.reverse();
        result.push(currLevel);
        level++;
    }
    return result;
};