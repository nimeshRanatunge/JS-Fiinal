//es5
//all objects have prototype, also a object
//all objects inherits properties and objects from their prototype
//when we dealing with object literels, we are inheriting from prototype called Object.prototype
//when we are dealong with objects that created through a constructor , its inheriting from Person.prototype ex: Person constructor

//Person constructor

function Person(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.birthday = new Date(dob);

    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1979);
    // }
}
//put into prototype - similar things for all objects
//Calculate age

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//fullname

Person.prototype.getFullname = function() {
    return `${this.fname} ${this.lname}`;
}

const john = new Person('John', 'doe', '8/12/1996');
const Mary = new Person('Mary', 'lor', '8 December 1996');

console.log(Mary);
console.log(john.calculateAge());
console.log(Mary.getFullname());





