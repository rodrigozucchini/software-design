//Liskov Substitution

//Problem: Base class assumes all vehicles can fly

//BAD
/*
class FlyingVehicle {
    fly() {
        console.log("Flying...");
    }
}

class Airplane extends FlyingVehicle {
    fly() {
        console.log("Airplane is flying");
    }
}

// Bicycle inherits FlyingVehicle, but it can't fly → violates LSP
class Bicycle extends FlyingVehicle {
    fly() {
        throw new Error("Bicycles cannot fly!"); 
    }
}

function startFlying(vehicle: FlyingVehicle) {
    vehicle.fly();
}

const bike = new Bicycle();
startFlying(bike); // ERROR

*/

//SOLUTION

// Define a general interface for movement
interface IMovable {
    move(): void;
}

// Airplane implements fly behavior
class Airplane implements IMovable {
    move() {
        console.log("Flying in the sky");
    }
}

// Car implements drive behavior
class Car implements IMovable {
    move() {
        console.log("Driving on the road");
    }
}

// Bicycle implements pedal behavior
class Bicycle implements IMovable {
    move() {
        console.log("Pedaling on the road");
    }
}

function startJourney(vehicle: IMovable) {
    vehicle.move();
}

startJourney(new Airplane()); // Flying in the sky
startJourney(new Car());      // Driving on the road
startJourney(new Bicycle());  // Pedaling on the road