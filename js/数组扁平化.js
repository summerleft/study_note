const flatten = (arr) => {
    while(arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr
}

console.log(flatten([1, [2, [3]]]));

function fallten2(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? fallten2(cur) : cur);
    }, []);
}