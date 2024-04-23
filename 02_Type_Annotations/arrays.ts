// -----------------------------------------------------------------------------
// I) Annotations for Arrays with Basic Data Types
// -----------------------------------------------------------------------------

// With Type Annotaiton - Typescript able to infer data type
const carMakers = ["ford", "toyota", "chevy"]; // Typescript type -> "string[]"

// Without Type Annotation
const carMakersTwo: string[] = ["ford", "toyota", "chevy"]; // Typescript type -> "string[]"

// With empty array -> Typescript cannot infere data type
const carMakersThree = []; // Typescript type -> 'never[]'
// Will bring problmes later

// In last case, an annotation type will be required
const carMakersFour: string[] = []; // Typescript type -> 'string[]'

// -----------------------------------------------------------------------------
// II) Annotations for Arrays with complex data types
// -----------------------------------------------------------------------------

// Array with instance of built-in class
const dates = [new Date(), new Date()]; // Typescript type -> 'Date[]'

// Array of arrays without Type Annotaiton - Typescript able to infer data type
const carsByMake = [["f150"], ["corolla"], ["camaro"]]; // Typescript type -> "string[][]"

// Array of arrays with Type Annotaiton - Typescript able to infer data type
const carsByMakeTwo: string[][] = [["f150"], ["corolla"], ["camaro"]]; // Typescript type -> "string[][]"

// -----------------------------------------------------------------------------
// III) Why typed arrays?
// -----------------------------------------------------------------------------

// i) Help with inference when extracting values
const aCar = carMakers[0]; // Type inference -> Typescript type -> 'string'
const myCar = carMakers.pop(); // Type inference -> Typescript type -> 'string'

// ii) Preventing incompatible values

// carMakers.push(100) // Error! -> Argument of type 'number' is not assignable to parameter of type 'string

// iii) Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
}); // Type inference -> Typescript type -> 'string[]'

// iv) Flexible types
const importantDates = [new Date(), "2030-10-10"]; // Type inference -> Typescript type -> '(string | Date)[]'

// Problem
// Case where array is initialized with a Date object only
// Type inference forcing one data type in array
const importantDatesTwo = [new Date()]; // Type inference -> Typescript type -> '(Date)[]'

// Solution
// Including a Type Annotation for (Date | String)[]
const importantDatesThree: (Date | string)[] = [new Date()]; // Type inference -> Typescript type -> '(Date)[]'
importantDatesThree.push('2030-10-10');
importantDatesThree.push(new Date());
// importantDatesThree.push(100); // Error! -> Argument of type 'number' is not assignable to parameter of type 'string | Date'
