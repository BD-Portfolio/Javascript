// Global scope
var a = 10;

{

    console.log("Value of a is : ", a);

    // Global scope
    var b = 20;
    console.log("Value of b is : ", b);

    // Block scope
    let c = 30
    console.log("Value of c is : ", c);

    // Block scope
    const d = 40;
    console.log("Value of d is : ", d);

}

// Since var is not block scoped it is accessible outside the block also
console.log("Value of b outside of block : ", b);