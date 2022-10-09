function myinstanceof(left, right) {
    let res = left;
    while (true) {
        res = Object.getPrototypeOf(res);
        if (res === right.prototype) {
            return true;
        } else if (!res) {
            return false;
        }
    }
}

console.log(myinstanceof([], Array));