Array.prototype.myReduce = function(fn, initialValue) {
    const arr = Array.prototype.slice.call(this);
    let res = initialValue ? initialValue : arr[0];
    const startIndex = initialValue ? 1 : 0;
    for (let i = startIndex; i < arr.length; i++) {
        fn.call(null, res, arr[i], i, this);
    }
    return res;
}