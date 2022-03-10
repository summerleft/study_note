Promise.race = function(arr) {
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            item.then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p1失败');
    }, 500)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2成功');
    }, 200)
})

Promise.race([p1, p2]).then(res => {
    console.log(res);
}, err => {
    console.log(err);
});