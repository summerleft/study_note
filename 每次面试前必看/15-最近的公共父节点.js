/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (!left) return right;
    if (!right) return left;
    return root;
};

var lowestCommonAncestor = function(root, p, q) {
    const parent = new Map();
    parent.set(root, null);
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const cur = queue.shift();
        if (cur.left) {
            parent.set(cur.left, cur);
            queue.push(cur.left);
        }
        if (cur.right) {
            parent.set(cur.right. cur);
            queue.push(cur.right);
        }
    }
    const set = new Set();
    while (p) {
        set.add(p);
        p = parent.get(p);
    }

    while (!set.has(q)) {
        q = parent.get(q);
    }

    return q;
};