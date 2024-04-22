// -----------------------------------------------------------------------------
// I) Classes
// -----------------------------------------------------------------------------

class myVehicle {
  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}

const vehicle = new myVehicle();
vehicle.drive();
vehicle.honk();

// -----------------------------------------------------------------------------
// II) Basic Inheritance
// -----------------------------------------------------------------------------

class Car extends myVehicle {
  // Overriding drive method
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car();
car.drive();
car.honk();

// -----------------------------------------------------------------------------
// III) Instance Methos Modifiers
// -----------------------------------------------------------------------------

// public -> method can be called any where, any time
// private -> method can only be called by other methods in "this" class
// protected -> method can be called by other methods in "this" class, or by
//              other methods in child classes

class otherVehicle {
  public honk(): void {
    console.log("beep");
  }
}

class otherCar extends otherVehicle {
  // Overriding drive method
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const secondCar = new otherCar();
//secondCar.drive(); // Error! -> Property 'drive' is private and only accessible within class 'otherCar'.
secondCar.startDrivingProcess();
secondCar.honk();

// -----------------------------------------------------------------------------
// IV) Fields in Classes
// -----------------------------------------------------------------------------

class myVehicleWithColor {

  constructor(public color: string, private size: number = 0){
    this.color = color;
    this.size = size
  }

  // Above syntax is equals to:
  //
  // color: string;
  // constructor(color: string){
  //   this.color = color;
  // }

  public honk(): void {
    console.log("beep");
  }
}

const secondVehicle = new myVehicleWithColor('orange', 500);
console.log(secondVehicle.color);
// console.log(secondVehicle.size); // Error! -> Property 'size' is private and only accessible within class 'myVehicleWithColor'.


// -----------------------------------------------------------------------------
// V) Fields with Inheritance
// -----------------------------------------------------------------------------

class myCarWithColor extends myVehicleWithColor {
  constructor(public wheels: number, color: string){
    super(color);
  }
}

const thirdCar = new myCarWithColor(4, 'orange');
console.log(thirdCar.wheels);
console.log(thirdCar.color);
