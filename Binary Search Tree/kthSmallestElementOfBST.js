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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
    // following inorder traversal

    let result = [];
    let current = root;

    function traverse(node){
        if(node.left) traverse(node.left);
        result.push(node.val);
        if(node.right) traverse(node.right);
    }

    traverse(current);
    
    return result[k-1];
};