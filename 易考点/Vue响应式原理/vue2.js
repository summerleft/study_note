const Observer = function(data) {
    for (let key in data) {
        defineReactive(data, key);
    }
}

const defineReactive = function(data, key) {
    const dep = new Dep();
    let val = obj[key];
    Object.defineProperty(data, key, {
        get() {
            console.log('in get');
            dep.depend();
            return val;
        },
        set(newVal) {
            if (newVal === val) {
                return;
            }
            val = newVal;
            dep.notify();
        }
    })
}

const observe = function(data) {
    return new Observer(data);
}

const Vue = function(options) {
    const self = this;
    // 将data赋值给this._data
    if (options && typeof options.data === 'function') {
        this._data = options.data.apply(this);
    }
    // 挂载函数
    this.mount = function() {
        new Watcher(self, self.render);
    }
    // 渲染函数
    this.render = function() {
        with(self) {
            _data.text;
        }
    }
    // 监听this._data
    observe(this._data);
}

