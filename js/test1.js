const params = {
    a: null,
    b: '',
    c: []
}
const {a=1,b=2,c=3,d=4} = params;
console.log(a+b, c+d);