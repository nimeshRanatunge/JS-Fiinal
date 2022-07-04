//object

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: ()=>{
        console.log('draw');
    }
};

circle.draw();

//factory function

function createcircle(radius) {
    return {
        radius,
        draw: function() {
            console.log(`draw ${radius}`);
        }
    };
}

const cir = createcircle(2);
cir.draw();

//constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}

const another = new Circle(1);

