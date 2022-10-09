Function.prototype.myApply = function(context, args) {
    if (typeof context !== 'function') {
        console.error('type error');
    }
    context = context || window;
    const fnSymbol = Symbol('fn');
    context[fnSymbol] = this;
    const res = context[fnSymbol](...args);
    delete context[fnSymbol];
    return res;
}