Function.prototype.myCall = function(context, ...args) {
    context || (context = window);
    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;
    const res = context[fnSymbol](...args);
    delete context[fnSymbol];
    return res;
}

Function.prototype.myApply = function(context, args) {
    context || (context = window);
    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;
    const res = context[fnSymbol](...args);
    delete context[fnSymbol];
    return res;
}

Function.prototype.myBind = function(context, ...args) {
    context || (context = window);
    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;
    return function() {
        args = args.concat([...arguments]);
        context[fnSymbol](...args);
        delete context[fnSymbol];
    }
}