const deepClone = (obj, map = new Map()) => {
    if (typeof obj !== 'object') {
        return obj;
    } else {
        const res = Array.isArray(obj) ? [] : {};
        if (map.get(obj)) {
            return map.get(obj);
        }
        map.set(obj, res);
        for (let key in obj) {
            res[key] = deepClone(obj[key]);
        }
        return res;
    }
}