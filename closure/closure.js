// Example 1
function functionOne() {
    const one = 1;
    console.log("Function one is called...");
    console.log("Value of one inside function one : ", one);
    function functionTwo() {
        console.log("Function two is called...");
        console.log("Value of one inside function two : ", one);
    }
    functionTwo();
}

functionOne();

// Example 2
function a() {
    let one;
    console.log("Function a is called...");
    console.log("Value of one inside function a : ", one);
    return function b() {
        one = 10;
        console.log("Function b is called...");
        console.log("Value of one inside function b : ", one);
    }
}

a()();

let x = a();
x();

// Example 3
function outer(outerParameter) {
    console.log("Outer function is called...");
    console.log("Value of parameter inside outer function : ", outerParameter);
    return function inner() {
        console.log("Inner function is called...");
        console.log("Value of outerParameter inside inner function : ", outerParameter);
    }
}

outer("Hello")();

