function myNew(fn, ...args) {
    const obj = Object.create(fn.prototype);
    const res = fn.call(obj, ...args);
    return res instanceof Object ? res : obj;
}