function Car() {
    this.name = 'test'
}

const car = new Car();

console.log(car.__proto__ === Car.prototype);
console.log(Car.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Car.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null)
