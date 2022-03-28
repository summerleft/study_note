const deepClone = (target, map = new Map()) => {
    if (typeof target !== 'object') return target;
    else {
        const res = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, res);
        for (const key in target) {
            res[key] = deepClone(target[key], map);
        }
    }
    return res;
}