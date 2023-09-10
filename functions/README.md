## Functions

This is an example how scope of a variable works.

### Types of functions
1. Normal function
A normal function declared with with function keyword having some name and not taken into a varibale.

2. Anonymous function
A function that doesn't have any name.

3. Arrow function
A function that follows arrow syntax for declaration.

4. First class function 
A function that can be used as a value or takes function as a parameter or returns any function is called First class function

5. High order function
A function that takes a function as a parameter or returned any function is called high order function

### Function Statement / Function Declaration
A normal function itself is called as function statement or declaration.

### Function Expression
A function without any name that is taken into a variable is called as function expression.

### Named Function Expression
A function with a name that is taken into a variable is called as named function expression.

### Points regarding Arrow function
- It doesnot have arguments paramter which normal has by default.
- It cannot be used as a constructor but normal function can be.
- It doesn;t creates its own this binding.
- It cannot be declared, it can only be used as a expression.

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node functions.js
   ```
### Output of the code

   ```sh
    Normal function called...
    Anonymous function called...
    Arrow function called...
    First class function called...
    High order function called...
    Function declaration or statement called...
    Function Expression called...
    Named Function Expression called...
    Param 1 :  20
    Param 2 :  80
   ```
