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
// var postorderTraversal = function(root, res=[]) {
//     if (!root) return res;
//     postorderTraversal(root.left, res);
//     postorderTraversal(root.right, res);
//     res.push(root.val);
//     return res;
// };

var postorderTraversal = function(root) {
    const stack = [];
    const res = [];
    if (!root) return res;
    stack.push(root);
    while (stack.length) {
        let cur = stack.pop();
        res.push(cur.val);
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    }
    return res.reverse();
};