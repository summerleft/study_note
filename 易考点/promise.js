Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let result = [];
        const len = promises.length;
        if (len === 0) return resolve([]);
        promises.forEach((p, i) => {
            Promise.resolve(p).then((res) => {
                count++;
                result[i] = res;
                if (count === len) {
                    resolve(result);
                }
            }).catch(reject);
        })
    })
}

Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((p, i) => {
            Promise.resolve(p).then(resolve).catch(reject)
        })
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 1)
  })
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 2)
  })
  
  Promise.myRace([p1, p2]).then((value) => {
    console.log(value) // 2
  })
  
  Promise.myRace([p1, p2, 3]).then((value) => {
    console.log(value) // 3
  })