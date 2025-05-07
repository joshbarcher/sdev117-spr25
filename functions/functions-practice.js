printMsg("suland@greenriver.edu", "jarcher@greenriver.edu", "Hello, Susan!", "Take Care, -Josh");
printMsg("tostrander@greenriver.edu", "jarcher@greenriver.edu", "Hello, Tina!", "Bye, -Josh");

const msg = returnMsg("jarcher@greenriver.edu", "jarcher@greenriver.edu", "Reminder, show up for class!", "Wink, -Josh");
console.log(msg);

const result = typeOfNumber(157);
console.log(`result is ${result}`);

const allDone = output("Hello, world!");
console.log(allDone);

//variable scope

const num1 = 10;
const num2 = 20;
addsNumbers(num1, num2);

function addsNumbers(one, two) {
    const result = one + two;
    console.log(result);
}

add(3, 6);
add(10, 100);
sub(3, 6);
sub(10, 100);

calculator(add, 1, 2);
calculator(sub, 3, 5);
calculator(mult, 2, 7);
calculator(div, 128, 2);

//functions that do something...
function output(msg) {
    console.log(msg);
}

function printMsg(to, from, text, salutations) {
    console.log("------------------------------");
    console.log(`To: ${to}`);
    console.log(`From: ${from}`);
    console.log(text);
    console.log();
    console.log(salutations);
    console.log("------------------------------");
}

//functions that return something...
function returnMsg(to, from, text, salutations) {
    return `
        --------------------------
        To: ${to}
        From: ${from}
        ${text}

        ${salutations}
        --------------------------
    `
}

//return if number is positive, negative, ...
function typeOfNumber(num) {
    if (num < 0) {
        return "negative";
    } else if (num > 0) {
        return "positive"
    } else if (num === 0) {
        return "zero";
    } else {
        return "NaN"
    }
}