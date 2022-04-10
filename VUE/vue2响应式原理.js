function reactive(obj, key, value) {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`${key}被读取了`);
            return value;
        },
        set(newValue) {
            console.log(`将obj.${key}设置为${newValue}`);
        }
    })
}

obj = {};

reactive(obj, 'a', 2);
obj.a;
obj.a = 4;