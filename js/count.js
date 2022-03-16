const count = () => {
    let count = 0;
    // return Promise.resolve().then(() => {
    //     setInterval(() => {
    //         console.log(count++);
    //     }, 1000);
    // })
    setInterval(() => {
        console.log(count++);
    }, 1000)
}

count();