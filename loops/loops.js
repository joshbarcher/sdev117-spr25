
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

//generate random numbers (integers) between 1 and 20, until a 1 comes up (critical failure)

let numCount = 0;
let result = 0;
while (result !== 1) {
    result = getRandNum();
    console.log(result);
    
    numCount++;
}
console.log(`You needed to generate ${numCount} numbers to get a 1`);

//generate 10 random booleans
for (let i = 1; i <= 10; i++) {
    printRandBoolean();
}

adder(10, -3, 117);
adder(1, 2, 3);
adder(4, 5); //c would be undefined

//we can use the return values
const numType = typeOfNumber(12);
console.log(`12 is a ${numType}`);

console.log(typeOfNumber(0));
console.log(typeOfNumber(-10));

console.log(`Here is my calculation: ${typeOfNumber(5)}`)

//returns "positive", "negative", or "zero"
function typeOfNumber(num) {
    if (num === 0) {
        return "zero";
    } else if (num > 0) {
        return "positive";
    } else {
        return "negative";
    }
}

function adder(a, b, c) {
    let result = a + b;

    if (c !== undefined) {
        result += c; //result = result + c;
    }

    console.log(result);
}

function printRandBoolean() {
    const num = Math.floor(Math.random() * 2) + 1;

    //num is either 1 or 2
    if (num === 1) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function getRandNum() {
    const num = Math.floor(Math.random() * 20) + 1;
    return num;
}