## Scope of variables

This is an example how scope of a variable works.

### Types of scope
1. Global scope
It is accessible everywhere in the code in all the functions and blocks.

2. Local scope
It is accessible only inside the block where it is declared like function or a block.

### Working

1. var is of global scope type so it can be used outside of the block even if declared inside the block.
2. var cannot be used outside of the function if declared inside the function as it is scoped to the function only.
3. let is local scoped that means sticked to the scope of block or the function.
4. const is also local scoped that means sticked to the scope of block or the function.

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node closure.js
   ```
### Output of the code

   ```sh
    Value of a is :  10
    Value of b is :  20
    Value of c is :  30
    Value of d is :  40
    Value of b outside of block :  20
   ```
