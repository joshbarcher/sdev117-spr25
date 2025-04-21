
//select op1
const op1Element = document.querySelector("#op1");
const num1 = op1Element.textContent;

//select op2
const op2Element = document.querySelector("#op2");
const num2 = op2Element.textContent;

//add numbers
const result = parseInt(num1) + parseInt(num2);

//show result
const resultElement = document.querySelector("#result");
resultElement.textContent = `${num1} + ${num2} = ${result}`;