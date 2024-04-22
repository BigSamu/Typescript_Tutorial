
// -----------------------------------------------------------------------------
// I) Variable Definitios with Types Annotations
// -----------------------------------------------------------------------------

// Basic Data Types
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in Object
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truth: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// -----------------------------------------------------------------------------
// II) Variable Definitios without Types Annotations (Type Inference)
// -----------------------------------------------------------------------------

// Cases above can be simplified using type inference (no specifically adding type annotations)
// For instance:
//
// let apples = 5;
// let speed = "fast";
// let hasName = true;
// let nothingMuch = null;
// let nothing = undefined;
//
// Or
//
// let colors = ["red", "green", "blue"];
// let myNumbers = [1, 2, 3];
// let truth = [true, true, false];

// -----------------------------------------------------------------------------
// III) Exceptions when Using Type Annotations (Type Inference not Working)
// -----------------------------------------------------------------------------


// So, when to use type annotatios (type inference does not work). Three cases:

// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';

// Problem
const coordindates = JSON.parse(json); // Problem: Typescript not able to infere the real data type. Giving 'any' type
// Solution
const coordindates_2: { x: number; y: number } = JSON.parse(json); // Type annotaion specificallay added

console.log(coordindates); // Typescript type -> 'any'
console.log(coordindates_2); // Typescript Type -> '{ x: number; y: number }'

// 2) When we declare a variable on one line and initalizate it later
let words = ["red", "green", "blue"];

// Problem
let foundWord; // Typescript type -> 'any'

// Solution
let foundWord_2: boolean; // Typescript type -> 'boolean'

for (let i = 0; i < words.length; i++) {
  if (words[i] == "green") {
    foundWord = true; // Typescript type -> 'any'
    foundWord_2 = true; // Typescript Type -> 'boolean'
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];

// Problem
let numberAboveZero = false;

// Solution
let numberAboveZero_2: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    // numberAboveZero = numbers[i]; // Error! The type 'number' is not assignable to the type 'boolean'
    numberAboveZero_2 = numbers[i]; // Typescript type -> 'boolean' or 'number'
  }
}

