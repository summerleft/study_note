class EventEmitter {
    constructor() {
        this.cache = {};
    }

    on(event, fn) {
        if (this.cache[event]) {
            this.cache[event].push(fn);
        } else {
            this.cache[event] = [fn];
        }
    }

    off(event, fn) {
        const tasks = this.cache[event];
        if (tasks) {
            const index = tasks.findIndex(f => f === fn);
            if (index > 0) {
                tasks.splice(index, 1);
            }
        }
    }

    emit(event, ...args) {
        if (this.cache[event]) {
            const tasks = this.cache[event].slice();
            tasks.forEach((fn) => {
                fn(...args);
            })
        }
    }
}

const eventEmitter = new EventEmitter();
const testFn = (content) => console.log(content);
eventEmitter.on('aaa', testFn);
eventEmitter.emit('aaa', 'test');

// 防抖节流
function debounce(fn, delay) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer);
        } else {
            timer = setTimeout(() => {
                fn();
            }, delay);
        }
    }
}

function throttle(fn, delay) {
    let canRun = true;
    return function(...args) {
        if (!canRun) {
            return;
        }
        canRun = false;
        setTimeout(() => {
            fn.apply(this, args);
            canRun = true;
        }, delay);
    }
}

function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function() {
    return this.name;
}

function Dog(name, age) {
    Animal.call(this, name);
    this.age = age;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

function myCreate(obj) {
    function f(){};
    f.prototype = obj;
    return new f();
}

Promise.myAll = (arrs) => {
    const result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        arrs.forEach((p, i) => {
            Promise.resolve(p).then((res) => {
                result[i] = res;
                count++;
                if (count === arrs.length) {
                    resolve(res);
                }
            }, (err) => {
                reject(err);
            })
        })
    })
}

Promise.myRace = (arrs) => {
    return new Promise((resolve, reject) => {
        arrs.forEach((p, j) => {
            Promise.resolve(p).then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
        })
    })
}

Function.prototype.myCall = function(context, ...args) {
    context || (context = window);
    const fnSymbol = new Symbol("fn");
    context[fnSymbol] = this;
    const res = context[fnSymbol](...args);
    delete context[fnSymbol];
    return res;
}

Function.prototype.myApply = function(context, args) {
    context || (context = window);
    const fnSymbol = new Symbol("fn");
    context[fnSymbol] = this;
    const res = context[fnSymbol](...args);
    delete context[fnSymbol];
    return res;
}

Function.prototype.myBind = function(context, ...args) {
    context || (context = window);
    const fnSymbol = new Symbol("fn");
    context[fnSymbol] = this;
    return function() {
        args = [...args, ...arguments];
        context[fnSymbol](...args);
        delete context[fnSymbol];
    }
}

function curry(fn, ...args) {
    return function() {
        args = [...args, ...arguments];
        if (args.length < fn.length) {
            return curry(fn, ...args);
        } else {
            return fn.apply(null, args);
        }
    }
}

function deepClone(target, map = new WeakMap()) {
    if (typeof target !== 'object') {
        return target;
    } else {
        const res = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, res);
        for (let key in target) {
            res[key] = deepClone(target[key], map);
        }
    }
    return res;
} 