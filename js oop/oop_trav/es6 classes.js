class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greeting() {
        return `Hello there ${this.firstname} ${this.lastname}`;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Jhonson');

console.log(mary);

console.log(Person.addNumbers(1,2));

//static method - we can use method without instantiating an object