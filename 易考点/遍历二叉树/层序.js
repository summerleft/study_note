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
 var levelOrder = function(root) {
    if (!root) return [];
    const queue = [];
    const res = [];
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        const tempRes = [];
        while (len) {
            const cur = queue.shift();
            tempRes.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
            len--;
        }
        res.push(tempRes);
    }
    return res;
};