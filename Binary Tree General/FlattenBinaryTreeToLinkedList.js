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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) =>  {
    if(root == null){
    return root
}

let r = flatten(root.right);
let l = flatten(root.left);

if(l) {
    let temp  = l;
    while(temp?.right != null)
          temp = temp.right;
    temp.right = root.right;
    root.right = l;
    root.left = null;
}
return root
};