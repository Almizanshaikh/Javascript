function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('mizan', 20);
person1.sayHello();  // Output: Hello, my name is mizan
