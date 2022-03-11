// 组合继承

function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function() {
    return this.name;
}

function Dog(name, age) {
    Animal.call(this, name);
    this.age = age;
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// class继承
class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}