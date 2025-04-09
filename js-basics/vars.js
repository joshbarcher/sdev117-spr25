/*
    Author: Josh Archer
    Date: 4/9/25
    Description: Statements that highlight how vars work in JS!
*/

const add = 12 + 5500;
console.log(add);

const title = "Mr"
const first = "Josh"
const last = "Archer"

//basic data types
let myVar = 10;
console.log(typeof myVar);

myVar = "10";
console.log(typeof myVar);

myVar = true;
console.log(typeof myVar); //print out the variable type

myVar = "Hello";
console.log(typeof myVar); /* a multi-line comment */

//other data types?
const letter = "a";

//array
const letters = ["a", "b", "c", "d"];
const set = new Set(); //another type of data structure

//objects
const bowlingBall = {
    color: "blue",
    size: 7,
    owned: true
}

//?

console.log(myVar);