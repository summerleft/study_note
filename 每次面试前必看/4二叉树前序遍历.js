// 递归
var preorderTraversal = function(root, res=[]) {
    if (!root) return res;
    res.push(root.val);
    preorderTraversal(root.left, res);
    preorderTraversal(root.right, res);
    return res;
};

// 迭代
var preorderTraversal = function(root) {
    if (!root) return [];
    const stack = [];
    const res = [];
    stack.push(root);
    while (stack.length) {
        let cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
};