//create multiple instances of objects we want to create constructor
//Person constructor

function Person(name) {
    this.name = name; //this keyword refers to the current instance of the object

    console.log(this);
}

//instantiate person object

const nimesh = new Person('nim');
const brad = new Person('brad');

const name1 = 'jeff'; //string premitive type
const name2 = new String('jeff'); //object

name2.nationality = 'SL';

console.log(name2);

const jhon1 = {
    name: 'jr'
};

const jhon2 = new Object(
    {
        name: 'jrx'
    }
)

console.log(jhon2);
