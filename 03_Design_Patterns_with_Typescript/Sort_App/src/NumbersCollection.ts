import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  // Instance Variables and Constructor - Detailed Form
  // data: number[];
  // constructor(data: number[]){
  //   this.data = data;
  // }

  // Instance Variables and Constructor - Concise Form
  // Same as code above!
  constructor(public data: number[]) {
    super()
  }

  // 'get' keyword is an accessor -> allows to avoid the use of () when calling method
  // -> treat the method as a property right away!
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] =
    [this.data[rightIndex],this.data[leftIndex]];
  }
}
