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
 * @return {number[]}
 */
const averageOfLevels =  (root) => {
    // BFS traversal
    if(!root) return [];
    let resAverages = new Array();
    let queue = new Array(); // required for tree traversal
    queue.push(root);

    while(queue.length) {
        const next = []; // keeps track of nodes from each level
        let sum = 0;
        // iterate nodes from each level
        for(const node of queue) {
            sum += node.val;
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        // sum of nodes divided by no. of non-null nodes present in each level
        const avg = sum / queue.length;
        resAverages.push(avg);
        // queue has nodes from the next level
        queue = next;
    }
    return resAverages;
};