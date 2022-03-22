Function.prototype.bind = function(context, ...args) {
    let self = this;
    let fBound = function() {
        return self.apply(this instanceof fBound ? this : context || window, args.concat(Array.prototype.slice.call(arguments)));
    }
    fBound.prototype = Object.create(this.prototype);
    return fBound;
}