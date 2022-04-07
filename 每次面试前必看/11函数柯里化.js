const curry = function(fn, ...args) {
    return function() {
        args = [...args, ...arguments];
        if (args.length < fn.length) {
            return curry(fn, ...args);
        } else {
            return fn.apply(null, args);
        }
    }
}

function add1(x, y, z) {
    return x + y + z;
}

const add = curry(add1);
console.log(Number(add(1)(2)(3)))