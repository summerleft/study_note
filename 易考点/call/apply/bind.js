Function.prototype.myCall = function(context, ...args) {
    if (!context || context === null) {
        // context = window;
    }
    let fn = Symbol();
    context[fn] = this;
    console.log(this);
    return context[fn](...args);
}

const obj = {
    a: 1,
    b: function() {
        console.log(this.a);
    }};
const obj2 = {
    a: 2,
    b: function() {
        console.log(this.a)
    }
}
obj.b.myCall(obj2);

Function.prototype.myApply = function(context, args) {
    if (!context || context === null) {
        context = window;
    }
    let fn = Symbol();
    context[fn] = this;
    return context[fn](args);
}

Function.prototype.myBind = function() {
    let args = [].slice.call(arguments);
    let _this = args.shift();
    let self = this;
    return function() {
        return self.apply(_this, args)
    }
}