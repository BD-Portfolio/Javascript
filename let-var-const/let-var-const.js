var a;

// The value of a is undefined here because it in memory context it is found but not initialized
console.log("Value of a is : ", a);

// Initialing a with value 5
a = 5;

// Here the value of a is 5 because it is initialized
console.log("Value of a is : ", a);

// It will give undefined
function testLet1() {
    let b;
    console.log("Value of b is : ", b);
}

// It will give error that b is not defined
function testLet2() {
    console.log("Value of b is : ", b);
    let b;
}

// Its a constant value and cannot be changed
const c = 55;

// It prints 55
console.log("Value of c is : ", c);

// This function will run
testLet1();

// This function will give error
testLet2();
