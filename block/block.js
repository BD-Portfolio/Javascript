const outer_value = "I am out of scope data";

// This is a valid block in javascript
// It has access to all of its outer scoped variables
// But outer world doesnot have the access to block data
{

    console.log("Value of outer_value is : ", outer_value);

    const a = 5;
    console.log("Value of a is : ", a);

    let b = 10;
    console.log("Value of b is : ", b);

    const c = 15;
    console.log("Value of c is : ", c);
}

// It will give error a is not defined
console.log("Value of a is : ", a);