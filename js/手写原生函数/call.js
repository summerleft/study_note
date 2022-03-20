Function.prototype.myCall = function(context = window, ...args) {
    let func = this;
    let fn = Symbol('fn');
    context[fn] = func;

    let res = context[fn](...args);
    delete context[fn];
    return res;
}