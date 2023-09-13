// A function that is passed as an argument to a function which gets called after occuring of some operation is called callback function.
setTimeout(callbackFunction = () => {
    console.log("This callback function is called after 6 seconds.");
    console.log("SetTimeout is a example of callback function.");
}, 6000);

// An example of callback function that prints 1 to 5 numbers after each second
function printNumber() {
    for (let index = 1; index < 6; index++) {
        setTimeout(function () {
            console.log(index);
        }, index * 1000);
    }
}

printNumber();