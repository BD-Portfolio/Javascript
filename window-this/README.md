## Window & this keyword

This is an example how window and this keyword works.

### Working

1. The window object represents a window in browser. 
2. An object of window is created automatically by the browser.
3. The window object is a global object provided by browser.
4. Window is the object of browser, it is not the object of javascript. 
5. Window object contains different methods like : open, close, alert etc... methods.
6. As in javascript window is global object, same in node js the "global" is the global object.
7. In javascript, this keyword refers to object.
8. In javascript, this keyword is window object.
9. Alone this refers to global object.
10. In a function, this refers to the global object.
11. In a function, in strict mode, this is undefined.
12. In an event, this refers to the element that received the event.

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node window-this.js
   ```
### Output of the code

   ```sh
    window example :- {}
    this keyword example :- {}
   ```
