//interestingly, classes have their properties in the constructor on line 2 (not right next to the name of the class on line 1)
class Car {
  constructor(door, engine, color) {  
    this.doors = door;
    this.engine = engine;
    this.color = color;
  }

  //below is a method (i.e. just a function attached to object)
  carStats() {
    return `this car has ${this.doors} doors, a ${this.engine} and a beautiful ${this.color} color!`
  }
}

const cs5 = new Car(4, 'V6', 'grey');

console.log(cs5);
console.log(cs5.carStats());


// Off Topic: .toString does not modify the source variable itself, but you can reassign it or assign to another variable
const asd = cs5.doors.toString();

console.log(typeof(cs5.doors)); // number
console.log(typeof(asd)); // string


//Now let's try child classes
class Sedan extends Car {
  constructor(doors, engine, color, brand /* New! */) {
    super(doors, engine, color);
    this.brand = brand;
    this.wheels = 4;
    this.airConditioning = true;
  }

  myBrand() {
    return `and this car\'s model is... ${this.brand} !!!`;
  }
}

const Corolla = new Sedan(4, '1.8l', 'blue', 'Toyota');

console.log(Corolla);
console.log(Corolla.carStats());
console.log(Corolla.myBrand());

// The video is WRONG about passing down METHODS. My tests show that all methods (except static ones) pass down automatically -- no need to list those in child's constructor or super.