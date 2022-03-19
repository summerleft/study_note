function myInstanceOf(left, right) {
    if (typeof left !== 'object' || left === null) return false;
    let proto = Object.getPrototypeOf(left);
    while (true) {
        if (proto == null) return false;
        if (proto == right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

console.log(myInstanceOf('111', String));
console.log(myInstanceOf(new String('111'), String));