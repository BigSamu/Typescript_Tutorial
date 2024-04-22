// -----------------------------------------------------------------------------
// I) Annotations for Functions
// -----------------------------------------------------------------------------

// Way 1 - Long Syntax
const add: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};

// Way 2 - Simplified Syntax
const addAgain = (a: number, b: number): number => {
  return a + b;
};

// Way 3 - Simplified Syntax with Type Inference in place (Not recomended)
const addOnceAgain = (a: number, b: number) => {
  return a + b;
};

// Note: Type inference only take cares of match in types, not the correctness
// of the function
const addWithLogicError = (a: number, b: number): number => {
  return a - b; // Here subtracting! Not adding!
};

// -----------------------------------------------------------------------------
// II) Annotations for Anonymos Functions
// -----------------------------------------------------------------------------

// Anonympus functions are functions without a name

// Non-anonymous Function
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous Function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// -----------------------------------------------------------------------------
// III) Void and Never
// -----------------------------------------------------------------------------

// i) void function -> equal to returns 'null' or 'undefined'
const looger = (message: string): void => {
  console.log(message);
};

// ii) never -> equals to say the function never returns something

// Very weird to use this case
const throwError = (message: string): never => {
  throw new Error(message);
};

// Better to use this:
const throwErrorAgain = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// Or this:

const throwErrorOnceAgain = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// -----------------------------------------------------------------------------
// IV) Destructuring in a Function
// -----------------------------------------------------------------------------

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// i) Without destructuring
const logweather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// II) With destructuring
const logWeatherAgain = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
