var a = '1';
function main() {
    function b(b) {
        a = '2';
        return b
    }
    function c(c) {
        console.log(a);
        var a = 'b';
    }
    console.log(b(a));
    c(a);
}
main();
console.log(a);