const a = Promise.resolve().then(() => {
    resolve('test');
}).then((res) => {
    console.log(res);
})

