// -----------------------------------------------------------------------------
// I) Annotations for Tuples
// -----------------------------------------------------------------------------

// i) Representing a drink with an Object Literal
const drink = {
  color: "brown",
  carbonater: true,
  sugar: 40,
}; // Type inference ->  { color: string; carbonater: boolean; sugar: number; }

// ii) Rerpresenting a drink with an Array

// Problem
// Type inference not based in order of elements in array
// We want 1st a string, 2nd a boolean, and 3rd a number
// But we get that an element can be either a string, a boolean or a number
const pepsi = ["brown", true, 40]; // Typescript Type -> (string | number | boolean)[]

// iii) Rerpresenting a drink with a Tuple
// Tuple -> Array-like structure where each element represents some property of a record

// Solution
// Defining a type annotation specifically defining the data types in specific order
// Here an array is convert into a tuple
const coke: [string, boolean, number] = ['brown', true, 40] // Typescript Type -> [string, boolean, number]

// -----------------------------------------------------------------------------
// II) Annotations for Tuples using Alias
// -----------------------------------------------------------------------------

// Defining a Type Alias
type Drink = [string, boolean, number]; // This is NOT DEFINING an array!

// Using Type Alias
const otherPepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// NOTE: Tupleas are not very useful. Look example below

// Problem
// What represent the numbers below? We don't have a clue
const carSpecs: [number, number] = [4000, 3354]

// Solution
// Using object literals we can get more meaningful data
const carStats = {
  horsePower: 400,
  weight: 3354
}
