function deepClone(obj, cache = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    if (cache.get(obj)) return cache.get(obj);
    let cloneObj = new obj.constructor();
    cache.set(obj, cloneObj);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], cache);
        }
    }

    return cloneObj;
}

const obj = { name: 'Jack', address: { x: 100, y: 200 } }
obj.a = obj // 循环引用
const newObj = deepClone(obj)
console.log(obj.address);
console.log(newObj.address);
obj.address.x = 30;
console.log(obj.address);
console.log(newObj.address);