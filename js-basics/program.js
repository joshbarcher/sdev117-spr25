/*
    Popup boxes
    1. alert() - prints a message
    2. prompt() - reads in a string
    3. confirm() - reads a yes/no (aka a boolean)
*/

//read in a few inputs from the user
let num1 = prompt("Enter a first number");
let num2 = prompt("Enter a second number");

//convert the variables from strings to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);

//change the values
const result = num1 + num2;

//print them out
alert(`Result is ${result}!`);

const nothingThere = null;
const notThereAsWell = undefined;

//does the variable store the value null?
if (nothingThere === null) {
    
}