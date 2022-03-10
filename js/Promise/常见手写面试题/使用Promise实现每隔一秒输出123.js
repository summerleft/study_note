//使用Promise实现每隔一秒输出1，2，3

const arr = [1, 2, 3];
arr.reduce((p, x) => {
    return p.then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(console.log(x));
            }, 1000)
        })
    })
}, Promise.resolve())

Promise.resolve().then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(1));
        }, 1000)
    })
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(2));
        }, 1000)
    })
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(3));
        }, 1000)
    })
})