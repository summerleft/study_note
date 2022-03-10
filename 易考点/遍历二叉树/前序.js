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
var preorderTraversal = function(root, res = []) {
    if (!root) return res;
    res.push(root.val);
    preorderTraversal(root.left, res);
    preorderTraversal(root.right, res);
    return res;
};

var preorderTraversal = function(root) {
    const res = [];
    if (!root) return res;
    const stack = [];
    stack.push(root);
    while (stack.length) {
        let cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
};