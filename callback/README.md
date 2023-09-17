## Callback

This is an example how callback function works.

### Working
1. A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution.
2. The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result. 
3.  Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.
4. Callbacks are used to handle the results of asynchronous operations in a non-blocking manner. 
5. Asynchronous operations are operations that take a significant amount of time to complete, such as network requests, file I/O, and database queries. 
6. If these operations were executed synchronously, the program would freeze and wait for the operation to complete before continuing. 
7. This can lead to a poor user experience, as the program would appear unresponsive.
8. Callbacks allow you to continue executing code while the operation is being executed in the background.

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node callback.js
   ```
### Output of the code

   ```sh
    1
    2
    3
    4
    5
    This callback function is called after 6 seconds.
    SetTimeout is a example of callback function.
   ```
