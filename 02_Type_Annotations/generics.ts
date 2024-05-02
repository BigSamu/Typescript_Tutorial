
// -----------------------------------------------------------------------------
// I) Generic with Classes
// -----------------------------------------------------------------------------

// 1) Not using Generics
class ArrayOfNumbers {
  constructor(public collection: number[]){}

  get(index: number): number{
    return this.collection[index];
  }
}

class ArrayOfStings {
  constructor(public collection: string[]){}

  get(index: number): string {
    return this.collection[index];
  }
}

// 2) Using Generics
class ArrayOfAnything<T>{
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index];
  }
}

// i) Class Instantation without Type Inference
const arr_0 = new ArrayOfAnything<string>(['a','b','c'])


// ii) Class Instantation with Type Inference
// Above statement is the same as below
// Typescript can make infere type of variables inside array
const arr = new ArrayOfAnything(['a','b','c'])


// -----------------------------------------------------------------------------
// I) Generic with Functions
// -----------------------------------------------------------------------------


// 1) Not using Generics
function printStrings(arr: string[]): void {
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}


// 2) Using Generics

function printAnything<T>(arr: T[]): void{
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}

// i) With Type Inference
printAnything<string>(['a','b','c']);

// ii) Without Type Inference
printAnything(['a','b','c']);

// -----------------------------------------------------------------------------
// I) Generic Constraints
// -----------------------------------------------------------------------------

class Car {
  print(){
    console.log('I am a car');
  }
}

class House{
  print(){
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}


// "T extends Interface"->  Generic Constraint
// We are promising Typescript that the Generics "T" we will use in the function
// have a method called 'print()'
function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for(let i=0; i< arr.length;i++){
    arr[i].print()
  }
}

printHouseOrCars<House>([new House(), new House()])
printHouseOrCars<Car>([new Car(), new Car()])
