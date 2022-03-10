const clone = function(target) {
    const res = {};
    for (let key in target) {
        res[key] = target[key];
    }
    return res;
}

const obj = {
    name: 'hejunjie',
    age: 22,
    hobby: ['music', 'badminton']
}

let testObj = clone(obj);
console.log(testObj)

const deepClone = function(target, map = new Map()) {
    if (typeof target !== 'object') {return target;}
    else {
        const res = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, res);
        for (const key in target) {
            res[key] = deepClone(target[key], map);
        }
        return res;
    }
}

const deepClone = function(target, map = new Map()) {
    if (typeof target !== 'object') {
        return target;
    } else {
        const res = Array.isArray(target) ? [] : {};
        if (map.get(target)) return map.get(target);
        map.set(target, res);
        for (const key in target) {
            res[key] = deepClone(target[key])
        }
        return res
    }
}