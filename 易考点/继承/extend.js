const extend = require("extend");

// es5继承
function Parent(name) {
    this.name = name;
}
Parent.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}
function Children(name, age) {
    Parent.call(this, name);
    this.age = age;
}
Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;


// es 6
class Parent {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age
    }
}
