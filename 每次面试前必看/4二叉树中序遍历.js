var inorderTraversal = function(root) {
    if (!root) return [];
    const stack = [];
    const res = [];
    let cur = root;
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return res;
}; 