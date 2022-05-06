const num1 = parseInt(prompt('Enter your first number: '));
const num2 = parseInt(prompt('Enter your second number: '));
const logicOp = prompt('Your logical operator');
let result;

if (logicOp == '+') {
    result = num1 + num2;
} else if (logicOp == '-') {
    result = num1 - num2;
} else if (logicOp == '*') {
    result = num1 * num2;
} else if (logicOp == '/') {
    result = num1 / num2;
} else if (logicOp == '%') {
    result = num1 % num2;
} else {
    console.log('Invalid Number');
}

console.log(result);