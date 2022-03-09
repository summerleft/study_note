const obj = {
    a: 1,
    b: 2,
}

const Person = function() {
    this.name = 'test';
    this.obj = obj;
}

const person1 = new Person();


const person2 = new Person();

person1.obj.a = 3;
person1.name = 'change'
console.log(person1);
console.log(person2);
console.log(person1.hasOwnProperty('name'));