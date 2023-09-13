## Closure

This is an example how closure works.

### Working

1. A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function 
2. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.
3. A function scope’s ability to access variables from the parent scope is known as lexical scope. 
4. We refer to the parent function’s lexical binding of the child function as “lexically binding.”
5. In closure the inner function has all the references (not the value) of the outer function which inner function can use any time. 

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node closure.js
   ```
### Output of the code

   ```sh
    Function one is called...
    Value of one inside function one :  1
    Function two is called...
    Value of one inside function two :  1
    Function a is called...
    Value of one inside function a :  undefined
    Function b is called...
    Value of one inside function b :  10
    Function a is called...
    Value of one inside function a :  undefined
    Function b is called...
    Value of one inside function b :  10
    Outer function is called...
    Value of parameter inside outer function :  Hello
    Inner function is called...
    Value of outerParameter inside inner function :  Hello
   ```
