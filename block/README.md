## block

This is an example how block works.

### Working

1. A block is container of multiple statements clubed into it. 
2. Its a normal javascript code only but put down into paranthesis to mark it in separate container.
3. A block has access to its outer scoped (global) values and function but not of any other block data.
4. The outer world doesnot has access to the block data.
5. Its example is if-else, for loop that uses paranthesis for block data

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node block.js
   ```
### Output of the code

   ```sh
    Value of outer_value is :  I am out of scope data
    Value of a is :  5
    Value of b is :  10
    Value of c is :  15
    ReferenceError: a is not defined
   ```
