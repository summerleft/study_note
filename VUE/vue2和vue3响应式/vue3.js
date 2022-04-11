function observe(obj, callback) {
    return new Proxy(obj, {
        get(target, key) {
            return target[key];
        },
        set(target, key, value) {
            target[key] = value;
            callback(key, value);
        }
    })
}

const obj = observe(
    {
        name: 'Jack',
        sex: 'male'
    },
    (key, value) => {
        console.log(`属性[${key}]的值被修改为[${value}]`)
    }
)

