Function.prototype.myBind = function(context, ...args) {
    context = context || window;
    const fnSymbol = Symbol('fn');
    context[fnSymbol] = this;
    return function() {
        args = args.concat([...arguments]);
        const res = context[fnSymbol](...args);
        delete context[fnSymbol];
        return res;
    }
}