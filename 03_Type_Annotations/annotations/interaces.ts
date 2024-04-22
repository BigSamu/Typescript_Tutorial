// -----------------------------------------------------------------------------
// I) Annotations without Interfaces
// -----------------------------------------------------------------------------

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

// Problem
// For function we have a very long type annotation for arguments
const printVehicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`)
};

printVehicle(oldCivic)

// Solution
// Use of Typescript Interfaces take makes more concise function definition

// -----------------------------------------------------------------------------
// II) Annotations with Interfaces
// -----------------------------------------------------------------------------
// Interface -> creates a new type, describing the property names and value types
// of an object



interface Vehicle {
  name: string;
  year: Date;
  broken: boolean
  summary(): string
}

// i) Using Interface in function definition
const printVehicleAgain = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`)
};

printVehicleAgain(oldCivic)

// ii) Other Example -> Having a vehicle Interface that only has the function summary()

interface Reportable{
  summary(): string
}

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic)
// It works!
// NOTE0 Typescript only checks if an object has a data type key-value pairs
// that match the ones defined in the Interface. If the objects has more type
// of key-value pairs, Typescript will not complain

// But...not semantically correct. A vehicle is a Repotable???

// This would be better, semantically
const printSummaryTwo = (item: Reportable): void => {
  console.log(item.summary());
}; // -> not semantically correct. A vehicle is a Repotable???

printSummaryTwo(oldCivic)

// -----------------------------------------------------------------------------
// II) Using same Interface for other type of objects
// -----------------------------------------------------------------------------

// Encourage to cretae generic Interfaces with generic functions
// Allows to create reusable code

const myDrink = {
  color: "brown",
  carbonater: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
};

printSummary(myDrink)

// In summary...
// Genenral Strategy for Reusable Code in TypeScript (TS)
//  - Create functions that accept arguments that are typed with interfaces
//  - Object/classes can decide to 'implement' a given interface to work with a function
