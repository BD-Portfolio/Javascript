function print(callback) {
    callback();
}

print(function () {
    console.log("Nested function 1 is called...");
    print(function () {
        console.log("Nested function 2 is called...");
        print(function () {
            console.log("Nested function 3 is called...");
            print(function () {
                console.log("Nested function 4 is called...");
                print(function () {
                    console.log("Nested function 5 is called...");
                    print(function () {
                        console.log("Nested function 6 is called...");
                        print(function () {
                            console.log("Nested function 7 is called...");
                        })
                    })
                })
            })
        })
    })
});