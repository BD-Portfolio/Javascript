## Call Stack ( Execution Stack )

This is an example how call stack works.

### Working

1. The stack is the data structure that stores the values in the form of LIFO (last in, first out). Similarly, an execution stack is a stack that carries track of all the execution contexts developed during the script life cycle.
2. At the bottom of the execution stack, GEC resides, and it is present by default in the stack.
3. When any function is present in the code, and the JS engine searches it, it instantly creates a function execution context (FEC) for that function and pushes it on the top of the execution context stack. 
4. The particular execution context which is available at the top of the execution context stack will always get executed by the JS engine first. 
5. As soon as the execution of all the code is done, the JS engine pops out the function's execution context and then moves towards the next and so on. 
6. Generally, when the script loads in the browser, the first element will be the global execution context. 
7. But when a function execution is detected, the execution context is created and gets virtually placed on the top of the GEC. 
8. The process continues until the execution of the whole code gets completed.



### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node call-stack.js
   ```
### Output of the code

   ```sh
   Car name :- BMW\
   Car model :- Q8\
   Total gears :- 6\
   Maximum speed :- 400 KM\
   ```

### Call stack with functions in order:
-----------------------------------------------------\
| Function getCarTopSpeed Context <- (top of stack)  |\
-----------------------------------------------------\
| Function getCarGearCount Context                   |\
-----------------------------------------------------\
| Function getCarModel Context                       |\
-----------------------------------------------------\
| Function getCarName Context                        |\
-----------------------------------------------------\
| Global Execution Context <- (bottom of stack)      |\
-----------------------------------------------------\
