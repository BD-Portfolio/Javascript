## Hoisting

This is an example how hoisting works.

### Working

1. Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.
2.  Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. 
3. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
4. JavaScript only hoists declarations, not initializations.

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node hoisting.js
   ```
### Output of the code

   ```sh
    Hoisting example
    Value of x :-  undefined
   ```

### Working of above code :-
1. Since function gets copied as it is in memory allocation phase, so getMessage function gives output as provided in console statement.
2. Value of x is undefined because x is put in console before it is initialized.
3. Hoisting brings variable declaration at top but not initializes that is why it is undefined.
