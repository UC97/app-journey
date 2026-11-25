// A semicolon is important here. Without it, JavaScript may treat
// the next line as part of the previous statement, causing an error.
alert("Hello");

[1, 2].forEach(alert);

/*
This is a multiline comment in JavaScript.
Everything inside this block is ignored by the JavaScript engine.

Example of a multiline alert message:
*/

// variables, used to store data values
let name = "John"; // string variable
let age = 30;   // number variable  
const BIRTH_YEAR = 1996; // constant variable
let isStudent = true; // boolean variable   
let city =  "New York"; // string variable
let country = "USA"; // string variable
let hobbies = ["reading", "traveling", "coding"]; // array variable

let person = { // object variable
    name: "John",
    age: 30,
    birthYear: BIRTH_YEAR,
    city: "New York",
    country: "USA",
    hobbies: ["reading", "traveling", "coding"]
};

alert("Name: " + person.name + "\nAge: " + person.age + "\nBirth Year: " + person.birthYear + "\nCity: " + person.city + "\nCountry: " + person.country + "\nHobbies: " + person.hobbies.join(", ")); 



// bill calculation
const tipPercentage = 0.1; // 10% tip
const taxPercentage = 0.18; // 18% tax
let bill = 300; // example bill amount
let totalBill = bill + bill * tipPercentage + bill * taxPercentage; // adding 10% tip and 18% tax
alert("Total Bill: $" + totalBill.toFixed(2));

// alert, prompt, and confirm
let userName = prompt("Please enter your name:");
alert("Hello, " + userName + "!");
