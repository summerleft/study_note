const eventEmitter = {
    list: {},
    on(event, fn) {
        let _this = this;
        (_this.list[event] || (_this.list[event] = [])).push(fn);
        return _this;
    },
    off(event, fn) {
        let _this = this;
        let fns = _this.list[event];
        if (!fns) return;
        if (!fn) {
            fns.length = 0
        } else {
            for (let i = 0; i< fns.length; i++) {
                if (fn === fns[i] || fn === fns[i].fn) {
                    fns.splice(i, 1)
                    break;
                }
            }
        }
        return _this;
    },
    once(event, fn) {
        let _this = this;
        function on() {
            _this.off(event, fn);
            fn.apply(_this, arguments);
        }
        on.fn = fn;
        _this.on(event, on);
        return _this;
    },
    emit() {
        let _this = this;
        let event = [].shift.call(arguments),
            fns = [..._this.list[event]];
        if (!fns || fns.length === 0) {
            return false;
        }
        fns.forEach((fn) => {
            fn.apply(_this, arguments);
        })
        return _this;
    }
}

const user1 = (content) => {
    console.log(`user1订阅了${content}`)
}

eventEmitter.on('javascript', user1);
eventEmitter.emit('javascript', 'let')
