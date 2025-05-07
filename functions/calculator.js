
//calculator buttons
const add = (a, b) => console.log(a + b);
const sub = (a, b) => console.log(a - b);
const mult = (a, b) => console.log(a * b);
const div = (a, b) => console.log(a / b);
const mod = (a, b) => console.log(a % b);
const exp = (a, b) => console.log(a ** b);

function calculator(func, a, b) {
    func(a, b);
}