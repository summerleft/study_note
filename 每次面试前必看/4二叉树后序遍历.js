var postorderTraversal = function(root) {
    if (!root) return [];
    const stack = [];
    const res = [];
    stack.push(root);
    while (stack.length) {
        const cur = stack.pop();
        res.push(cur.val);
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    }
    return res.reverse();
};