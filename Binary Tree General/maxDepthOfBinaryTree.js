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
const maxDepth = (root) => {
    if (!root) {
      return 0
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  const depth = 1 + Math.max(left, right);
  return depth;
};