class Person {
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        return `Good day ${this.firstname} ${this.lastname}`;
    }
}

//creating subclass of Person

class Customer extends Person {
    constructor(first_name, last_name, phone, membership) {
        super(first_name, last_name);

        this.phone = phone;
        this.membership = membership;
    }
}

const john = new Customer('john', 'Doe', '003233', 'Standard');

console.log(john);
console.log(john.greeting());