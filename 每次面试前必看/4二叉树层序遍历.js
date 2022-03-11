var levelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [];
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        const tempRes = [];
        while (len--) {
            const cur = queue.shift();
            tempRes.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        res.push(tempRes);
    }
    return res;
};