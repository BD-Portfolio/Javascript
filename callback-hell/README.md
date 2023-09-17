## Callback Hell

This is an example how callback hell works.

### Working
1. A callback hell is the pyramid like structure where nested callbacks are present.
2. One callback is present inside another.
3. The structure becomes complex.
4. It affects code redability.
5. It affects maintainability.
6. Every callback waits for the previous callback to complete.

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node callback-hell.js
   ```
### Output of the code

   ```sh
   Nested function 1 is called...
   Nested function 2 is called...
   Nested function 3 is called...
   Nested function 4 is called...
   Nested function 5 is called...
   Nested function 6 is called...
   Nested function 7 is called...
   ```
