// 双指针
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let pre = null, cur = head;
    while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
};

// 递归
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};