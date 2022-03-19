class EventEmitter {
    constructor() {
        this.cache = {}
    }

    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn);
        } else {
            this.cache[name] = [fn];
        }
    }

    off(name, fn) {
        let tasks = this.cache[name];
        if (tasks) {
            const index = tasks.findIndex(f => f === fn || fn.callback === fn);
            if (index >= 0) {
                tasks.splice(index, 1);
            }
        }
    }

    emit(name, once, ...args) {
        if (this.cache[name]) {
            let tasks = this.cache[name].slice()
            tasks.forEach((fn) => {
                fn(...args);
            })
            if (once) {
                delete this.cache[name];
            }
        }
    }
}

const eventBus = new EventEmitter();
const fn1 = function(name, age) {
    console.log(`${name}${age}`);
}

const fn2 = function(name, age) {
    console.log(`Hello${name}${age}`);
}

eventBus.on('aaa', fn1);
eventBus.on('aaa', fn2);
eventBus.emit('aaa', false, 'he', '12');
eventBus.emit('aaa', true, '1', '2');

