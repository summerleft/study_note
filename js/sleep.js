// const sleep = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds))

const sleep1 = (delay) => {
    return new Promise((resolve) => {
        const start = +new Date();
        let now = 0
        while (true) {
            now = +new Date();
            if ((now - start) >= delay) {
                resolve();
                break;
            }
        }
    })
}

const sleep2 = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const test = async (delay) => {
    console.log(1);
    await sleep1(delay);
    console.log(2)
    await sleep2(delay);
    console.log(3);
}

test(2000);
