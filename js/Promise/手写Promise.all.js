Promise.all = function(arr) {
    return new Promise((resolve, reject) => {
        const len = arr.length;
        let count = 0;
        const result = [];
        if (arr.length === 0) {
            resolve(arr);
        }
        for (let i = 0; i < len; i++) {
            arr[i].then((res) => {
                result.push(res);
                count++;
                if (count === len) {
                    resolve(result)
                }
            }, (err) => {
                reject(err);
            })
        }
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1成功')
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('p2成功')
})

Promise.all([]);