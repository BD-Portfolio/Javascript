// Normal function
function normalFunction() {
    console.log("Normal function called...");
}

normalFunction();

// Anonymous function
let anonymousFunction = function () {
    console.log("Anonymous function called...");
}

anonymousFunction();

// Arrow function
let arrowFunction = () => {
    console.log("Arrow function called...");
}

arrowFunction();

// First Class Function or High Order function
// A function that can be used as a value or passed as a parameter or be returned through any function is called First class function.
function firstClassFn(firstClassFnParam) {
    return firstClassFnParam();
}

firstClassFn((function () { console.log("First class function") }))

// Function Statement or Function Declaration
// Normally writing a function is only called as function statement or declaration
function functionDeclaration() {
    console.log("Function declaration or statement called...");
}

functionDeclaration();

// Function Expression
// When a function is taken into a variable then its called as a function expression
var x = function () {
    console.log("Function Expression called...");
}

x();

// Named Function Expression
// When a function is taken into a variable then its called as a function expression
var y = function test() {
    console.log("Named Function Expression called...");
}

y();

// It is called function parameters
function test(param1, param2) {
    console.log("Param 1 : ", param1);
    console.log("Param 2 : ", param2);
}

// It is called function arguments
test(20, 80);