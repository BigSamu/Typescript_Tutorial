// -----------------------------------------------------------------------------
// I) Annotations for Objects and Destructuring
// -----------------------------------------------------------------------------

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// If we want to use destructuring, we need to define the entire structure
// to add a type annotation

// Examaple 1
const { age }: { age: number } = profile;

// Example 2 -> changing names when destructuring
const { age: myAge, name: myName }: { age: number; name: string } = profile;

// Example 3 -> with double destrcturing
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
