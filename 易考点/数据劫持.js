function defineReactive(obj, key, val) {
    let Dep;
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            console.log('被读取了');
            Dep.depend();
            return key;
        },
        set: (newVal) => {
            if (val === newVal) {
                return;
            }
            val = newVal;
            Dep.notify();
            console.log('被设置了');
        }
    })
}

let data = {
    text: 'hello world'
}

defineReactive(data, 'text', data.text);
console.log(data.text);
data.text = 'hello Vue';