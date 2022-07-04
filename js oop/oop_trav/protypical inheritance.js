//Person constructor

function Person(fnamep, lnamep) {
    this.firstname = fnamep;
    this.lastname = lnamep
}

//prototype greeting

Person.prototype.greeting = function() {
    return `hey ${this.firstname} ${this.lastname}`
};

person1 = new Person('john', 'doe');

console.log(person1.greeting());

//customer constructor

function Customer(fnamec, lnamec, phone) {
    this.firstname = fnamec;
    this.lastname = lnamec;
    this.phone = phone;

    Person.call(this, fnamec, lnamec);

}
//Inherit person prototype methods
Customer.prototype = Object.create(Person.prototype);

const customer1 = new Customer('Nimesh', 'Thisara', '0758511300');

console.log(customer1.greeting());

console.log(customer1);