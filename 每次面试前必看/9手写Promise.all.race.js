Promise.myAll = function(arrs) {
    let count = 0;
    const result = [];
    return new Promise((resolve, reject) => {
        arrs.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                count++;
                result[i] = val;
                if (count === arrs.length) {
                    resolve(result);
                }
            }, err => {
                reject(err);
            })
        });
    })
}

Promise.myRace = function(arrs) {
    return new Promise((resolve, reject) => {
        arrs.forEach(p => {
            Promise.resolve(p).then(val => {
                resolve(val);
            }, err => {
                reject(err);
            })
        })
    })
}

Promise.myAllSettled = function(arrs) {
    const result = []
    return new Promise((resolve, reject) => {
        arrs.forEach(p => {
            Promise.resolve(p).then(val => {
                result.push({
                    status: 'fulfilled',
                    value: val
                })
                if (result.length === arrs.length) resolve(result);
            }, err => {
                result.push({
                    status: 'rejected',
                    value: err
                })
                if (result.length === arrs.length) resolve(result);
            })
        })
    })
}