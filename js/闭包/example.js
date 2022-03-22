function test() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}

const count = test();
count();
count();
