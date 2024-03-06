/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    const build = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }

        const rootValue = preorder[preStart];
        const root = new TreeNode(rootValue);

        const rootIndex = inorder.indexOf(rootValue);
        const leftSubtreeSize = rootIndex - inStart;

        root.left = build(preStart + 1, preStart + leftSubtreeSize, inStart, rootIndex - 1);
        root.right = build(preStart + leftSubtreeSize + 1, preEnd, rootIndex + 1, inEnd);

        return root;
    };
    
    const result = build(0, preorder.length - 1, 0, inorder.length - 1);
    return result;
};