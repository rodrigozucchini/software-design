// Builder Pattern

// Product
// This is the complex object we want to build.
// It has required and optional properties.
class Car {
  brand!: string;
  model!: string;
  color?: string;
  electric?: boolean;
}

// Builder
// The Builder is responsible for constructing the Car step by step.
// It hides the construction logic from the client.
class CarBuilder {
  private car: Car;

  // The constructor receives only the mandatory data.
  // This avoids long constructors with many optional parameters.
  constructor(brand: string, model: string) {
    this.car = new Car();
    this.car.brand = brand;
    this.car.model = model;
  }

  // Each method configures one part of the object.
  // Returning 'this' allows method chaining (fluent interface).
  setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  // Optional step in the building process.
  // The client decides whether to call it or not.
  setElectric(isElectric: boolean): this {
    this.car.electric = isElectric;
    return this;
  }

  // Final step of the Builder.
  // This method returns the fully constructed object.
  build(): Car {
    return this.car;
  }
}

// Client code
// The client does not know how the Car is constructed internally.
// It only uses the Builder API.
const car = new CarBuilder('Tesla', 'Model 3')
  .setColor('Red')
  .setElectric(true)
  .build();

console.log(car);
