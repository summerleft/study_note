class MyPromise {
    constructor(excetutor) {
        excetutor(this.resolve, this.reject);
    }

    status = PENDING;
    value = null;
    reson = null;

    onFullfilledCallbacks = [];
    onRejectedCallbacks = [];

    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            while (this.onFullfilledCallbacks.length) {
                this.onFullfilledCallbacks.shift()(value);
            }
        }
    }

    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason);
            }
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status = FULFILLED) {
            onFulfilled(this.value);
        }
    }
}

function myNew(target) {
    const obj = {};
    obj.__proto__ = target.prototype;
    target.call(obj);
    return obj;
}

const deepClone = (target, map = new WeakMap()) => {
    if (typeof target !== 'object') {
        return target;
    } else {
        const res = Array.isArray(target) ? [] : {};
        if (map.get(target)) return map.get(target);
        map.set(target, res);
        for (const key in target) {
            res[key] = deepClone(target[key]);
        }
    }
    return res;
}

const objFlat = (obj) => {
    const res = {};
    const process = (key, value) => {
        if (Object(value) !== value) {
            if (key) {
                res[key] = value;
            }
        } else if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                process(`${key}[${i}]`, value[i]);
            }
            if (value.length === 0) {
                res[key] = [];
            }
        } else {
            const objArr = Object.keys[value];
            objArr.forEach((item) => {
                process(key ? `${key}.${item}` : `${item}`, value[item]);
            })
            if (objArr.length === 0 && key) {
                res[key] = {}
            }
        }
    }
    process('', obj);
    return res;
}