Array.prototype.myMap = function(fn, context) {
    const arr = Array.prototype.slice.call(this);
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(fn.call(context, arr[i], i, this));
    }
    return mappedArr;
}