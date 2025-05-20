"use strict";
let age = 25;
let name = "John Doe";
let isStudent = false;
let hobbies = ["reading", "gaming", "coding"];
let address = {
    street: "123 Main St",
    city: "New York",
    zip: 10001,
};
let greet = (name) => {
    return `Hello, ${name}!`;
};
let numbers = [1, 2, 3, 4, 5];
let sum = (a, b) => {
    return a + b;
};
let person = {
    name: "Alice",
    age: 30,
};
let isAdult = person.age >= 18;
let printPerson = (person) => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
};
let printHobbies = (hobbies) => {
    console.log("Hobbies:");
    hobbies.forEach((hobby) => {
        console.log(`- ${hobby}`);
    });
};
let printAddress = (address) => {
    console.log(`Address: ${address.street}, ${address.city}, ${address.zip}`);
};
let printNumbers = (numbers) => {
    console.log("Numbers:");
    numbers.forEach((number) => {
        console.log(`- ${number}`);
    });
};
let printSum = (a, b) => {
    console.log(`Sum: ${sum(a, b)}`);
};
let printGreet = (name) => {
    console.log(greet(name));
};
let printIsAdult = (isAdult) => {
    console.log(`Is Adult: ${isAdult}`);
};
let printPersonInfo = (person) => {
    printPerson(person);
    printIsAdult(person.age >= 18);
};
let printHobbiesInfo = (hobbies) => {
    printHobbies(hobbies);
};
// Sample function calls to test everything
printGreet("John");
printPersonInfo(person);
printHobbiesInfo(hobbies);
printAddress(address);
printNumbers(numbers);
printSum(10, 15);
