## let, var and const

This is an example how let, var and const works.

### Working

1. var :- 
- Var declarations are globally or function scoped based on its declaration.
- Its default value is undefined if not initialized.
- Var variables can be updated and re-declared within its scope.
- It is hoisted to top of its scope.
- If var is consoled and declared below, then it will have value undefined.

2. let
- Let is block scoped
- Its default value is undefined if not initialized.
- Let variables can be updated and but not re-declared.
- It is hoisted to top of its scope.
- If let is consoled and declared below, then it will give error used before initialized.

3. const
- Const is block scoped
- Its mandatory to initialize the constant else it gives error.
- Const variables can neither be updated nor be re-declared.
- It is hoisted to top of its scope.
- If const is consoled and initialized below, then it will give error used before initialized.

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node let-var-const.js
   ```
### Output of the code

   ```sh
    Value of a is :  undefined
    Value of a is :  5
    Value of c is :  55
    Value of b is :  undefined
    ReferenceError: Cannot access 'b' before initialization
   ```
