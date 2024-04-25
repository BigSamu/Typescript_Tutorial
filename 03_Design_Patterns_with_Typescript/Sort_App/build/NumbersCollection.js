"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    // Instance Variables and Constructor - Detailed Form
    // data: number[];
    // constructor(data: number[]){
    //   this.data = data;
    // }
    // Instance Variables and Constructor - Concise Form
    // Same as code above!
    constructor(data) {
        this.data = data;
    }
    // 'get' keyword is an accessor -> allows to avoid the use of () when calling method
    // -> treat the method as a property right away!
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        [this.data[leftIndex], this.data[rightIndex]] =
            [this.data[rightIndex], this.data[leftIndex]];
    }
}
exports.NumbersCollection = NumbersCollection;
