function observe(obj, callback) {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        Object.defineProperty(newObj, key, {
            configurable: true,
            enumerable: true,
            get() {
                return obj[key]
            },
            set(newVal) {
                obj[key] = newVal;
                callback(key, newVal);
            }
        })
    })
    return newObj;
}

const obj = observe(
    {
        name: 'Jack',
        sex: 'male',
    },
    (key, value) => {
        console.log(`属性[${key}]的值被修改为[${value}]`)
    }
)

obj.name = 'girl';
obj.sex = 'female'