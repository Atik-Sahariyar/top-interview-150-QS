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
 * @return {number}
 */
var sumNumbers = function(root) {
    
    const traverse = (node, num) => {
       if(!node) return null;
       num += node.val
       if(!node.left && !node.right) return +num;
       return traverse(node.left, num) + traverse(node.right, num);
   }

   return traverse(root, '');
};