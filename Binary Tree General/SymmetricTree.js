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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root == null) return true;
    return isMirror(root.left, root.right);
}; 

const isMirror = (leftNode, rightNode) => {
    if(leftNode == null && rightNode == null) return true;
    if(leftNode == null || rightNode == null) return false;
    if(leftNode.val !== rightNode.val) return false;
   
    return isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left);
}