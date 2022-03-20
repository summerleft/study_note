Promise.all = function(arr) {
    let count = 0;
    const result = [];
    return new Promise((resolve, reject) => {
        if (arr.length === 0) resolve(result);
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(res => {
                count++;
                result.push(res);
                if (count === arr.length) {
                    resolve(result);
                }
            }, err => {
                reject(err);
            })
        }
    })
}