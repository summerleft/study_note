class EventEmitter {
    constructor() {
        this.cache = {};
    }

    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn);
        } else {
            this.cache[name] = [fn];
        }
    }

    off(name, fn) {
        const tasks = this.cache[name];
        if (tasks) {
            const index = tasks.findIndex(f => f === fn || f.callback === fn);
            if (index >= 0) {
                tasks.splice(index, 1);
            }
        }
    }

    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            const tasks = this.cache[name].slice();
            tasks.forEach(fn => {
                fn(...args);
            })
            if (once) {
                delete this.cache[name];
            }
        }
    }
}