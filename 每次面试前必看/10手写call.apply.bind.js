Function.prototype.myCall = function(context) {
    context || (context = window);
    context.fn = this;
    const args = [...arguments].slice(1);
    const res = context.fn(...args);
    delete context.fn;
    return res;
}

const me = { name: 'Jack' }
function say() {
  console.log(`My name is ${this.name || 'default'}`);
}
say.myCall(me)

Function.prototype.myApply = function(context) {
    context || (context = window);
    context.fn = this;
    const args = [...arguments].slice(1);
    const res = context.fn(args);
    delete context.fn;
    return res;
}

Function.prototype.myBind = function(context) {
    const fn = this;
    const args = [...arguments].slice(1);
    const newFunc = function() {
        const newArgs = args.concat([...arguments]);
        if (this instanceof newFunc) {
            fn.apply(this, newArgs);
        } else {
            fn.apply(context, newArgs);
        }
        
    }
    return newFunc;
}