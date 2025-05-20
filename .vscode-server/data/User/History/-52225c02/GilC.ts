let age: number = 25;
let name: string = "John Doe";
let isStudent: boolean = false;

let hobbies: string[] = ["reading", "gaming", "coding"];

let address: { street: string; city: string; zip: number } = {
  street: "123 Main St",
  city: "New York",
  zip: 10001,
};

let greet: (name: string) => string = (name) => {
  return `Hello, ${name}!`;
};

let numbers: number[] = [1, 2, 3, 4, 5];

let sum: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

let person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

let isAdult: boolean = person.age >= 18;

let printPerson: (person: { name: string; age: number }) => void = (person) => {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
};

let printHobbies: (hobbies: string[]) => void = (hobbies) => {
  console.log("Hobbies:");
  hobbies.forEach((hobby) => {
    console.log(`- ${hobby}`);
  });
};

let printAddress: (address: { street: string; city: string; zip: number }) => void = (address) => {
  console.log(`Address: ${address.street}, ${address.city}, ${address.zip}`);
};

let printNumbers: (numbers: number[]) => void = (numbers) => {
  console.log("Numbers:");
  numbers.forEach((number) => {
    console.log(`- ${number}`);
  });
};

let printSum: (a: number, b: number) => void = (a, b) => {
  console.log(`Sum: ${sum(a, b)}`);
};

let printGreet: (name: string) => void = (name) => {
  console.log(greet(name));
};

let printIsAdult: (isAdult: boolean) => void = (isAdult) => {
  console.log(`Is Adult: ${isAdult}`);
};

let printPersonInfo: (person: { name: string; age: number }) => void = (person) => {
  printPerson(person);
  printIsAdult(person.age >= 18);
};

let printHobbiesInfo: (hobbies: string[]) => void = (hobbies) => {
  printHobbies(hobbies);
};

// Sample function calls to test everything
printGreet("John");
printPersonInfo(person);
printHobbiesInfo(hobbies);
printAddress(address);
printNumbers(numbers);
printSum(10, 15);
