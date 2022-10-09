Function.prototype.myCall = function(context, ...args) {
    if (typeof this !== 'function') {
        console.error('type error');
    }
    context = context || window;
    const fnSymbol = Symbol('fn');
    context[fnSymbol] = this;
    const res = context[fnSymbol](...args);
    delete context[fnSymbol];
    return res;
}