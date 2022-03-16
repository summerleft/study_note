function* gen() {
    const a = yield 1;
    console.log(a,'this is a')
    const b = yield 2;
    console.log(b,'this is b')
    const c = yield 3;
    console.log(c,'this is c')
    return 'resultValue'
}
  
let g = gen();

console.log(g.next());
console.log(g.next('param-a')); 
console.log(g.next('param-b'));
console.log(g.next('param-c'));
console.log(g.next());
console.log(g.next());

// {value: 1, done: false}
// param-a this is a
// {value: 2, done: false}
// param-b this is b
// {value: 3, done: false}
// param-c this is c
// {value: resultValue, done: true}
// {value: undefined, done: true}