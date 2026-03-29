// Greeting message for the console user
console.log("%c--- JS Console Calculator Loaded ---", "color: #007bff; font-weight: bold; font-size: 14px;");
console.log("Available Commands: add(a,b), subtract(a,b), multiply(a,b), divide(a,b), power(a,b)");

/**
 * Addition
 */
function add(a, b) {
    const result = a + b;
    console.log(`Result: ${a} + ${b} = ${result}`);
    return result;
}

/**
 * Subtraction
 */
function subtract(a, b) {
    const result = a - b;
    console.log(`Result: ${a} - ${b} = ${result}`);
    return result;
}

/**
 * Multiplication
 */
function multiply(a, b) {
    const result = a * b;
    console.log(`Result: ${a} * ${b} = ${result}`);
    return result;
}

/**
 * Division (includes check for zero)
 */
function divide(a, b) {
    if (b === 0) {
        console.error("Error: Division by zero is not allowed!");
        return null;
    }
    const result = a / b;
    console.log(`Result: ${a} / ${b} = ${result}`);
    return result;
}

/**
 * Power (Exponentiation)
 */
function power(a, b) {
    const result = Math.pow(a, b);
    console.log(`Result: ${a} raised to the power of ${b} = ${result}`);
    return result;
}