const objFlat = (obj) => {
    const res = {};
    const process = (key, value) => {
        if (Object(value) !== value) {
            if (key) {
                res[key] = value;
            }
        } else if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                process(`${key}[${i}]`, value[i])
            }
            if (value.length === 0) {
                res[key] = []
            }
        } else {
            const objArr = Object.keys(value);
            objArr.forEach(item => {
                process(key ? `${key}.${item}` : `${item}`, value[item]);
            })
            if (objArr.length === 0 && key) {
                res[key] = {};
            }
        }
    }
    process('', obj);
    return res;
}

console.log(objFlat({
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: {
        g: 2,
        h: [1,2,3]
    }
}))