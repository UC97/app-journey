// Output a sentence to the console
let name = "John Doe";
let age = 30;
const BIRTH_YEAR = 1996;
let city = "New York";
let country = "USA";
let hobbies = ["reading", "traveling", "coding"];
console.log(`Hello, World! My ${name} is ${age} years old and was born in ${BIRTH_YEAR}. I live in ${city}, ${country} and enjoy ${hobbies.join(", ")}.`);


const tipPercentage = 0.1; // 10% tip
const taxPercentage = 0.18; // 18% tax
let bill = 300; // example bill amount
let totalBill = bill + bill * tipPercentage + bill * taxPercentage;
console.log(`Total Bill: $${totalBill.toFixed(2)}`);