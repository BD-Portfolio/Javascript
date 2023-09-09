## Execution Context

This is an example how execution context works and what are its components.

### Working

1. Execution context is the concept for describing the internal working of a code. In JavaScript, the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context. 
2. It is the execution context that decides which code section has access to the functions, variables, and objects used in the code. 
3. During the execution context, the specific code gets parsed line by line then the variables and functions are stored in the memory. 
4. An execution context is similar to a container that stores variables, and the code gets evaluated and then executed. 
5. Thus, it is the execution context that provides an environment for the specific code to get executed.
6.  Every execution context (not just global ones) will consist of two things : 
- A global object :–  Provides variables and functions that are available anywhere inside the current environment. In the browser, the global object is named window; when using Node.js, the global object is named global.
- A this object :–  The this keyword points to the current object of execution context where the code belongs.

### Components of Execution Context

#### 1. Memory component (Creation phase)
- This is the area where all the variables and functions memory is allocated.
- To all the variables the value assigned is undefined.
- To all the function, the entire code of that function gets stored in the memory.

#### 2. Code component (Execution phase)
- This is the area where code execution starts. The variables & functions starts doing there work.
- When any variable is initialized then code component reads it and executes that and the value of the variable changes in the memory component.
- When any function is executed, the new execution context for that function gets created with all its components and works in same manner. Once the work of execution context is completed it's removed/deleted by the javascript engine.
- For any console statements, the code component simply prints the values and jumps to the next line for code execution.

### Types of Execution Context

#### 1. Global Execution Context (GEC)
- This is the default execution context in which Javascript code start its execution when the file first loads in the browser or javascript engine. 
- All of the global code i.e. code which is not inside any function or object is executed inside the global execution context. 
- Only one Global Execution Context can be created because only one global environment is possible for Javascript code execution as the JS engine is single threaded.

#### 2. Functional execution context (FEC)
- Function execution context is the context created by the JS engine whenever it finds any function call. 
- Each function has its own unique execution context.  
- Function execution context has access to all the code of the global execution context though vice versa is not applicable. 
- While executing the global execution context code, if JS engine finds a function call, it creates a new function execution context for that function. 
- In the browser context, if the code is executing in strict mode value of this is undefined else it is window object in the function execution context.

#### 3. Eval execution context (EEC)
- The eval function is created for turning a string into executable JavaScript code. Although it seems very powerful, this function is not recommended to be used because we can’t control the privileges of it.
- The usage of the eval function can open your application or service to injection attacks. 
- The string that the eval function receives can be a malicious string that can totally destroy your database or application. 
- This is why the eval function is deprecated and not used.

### Test code

_Below is an example of how you can run the code (Assuming you have node installed in system)._

1. Open the terminal and navigate to this directory.
2. Enter command
   ```sh
   node execution-context.js
   ```

### Global Execution context for the code executed : 
#### 1. Phase: Creation
window: global object__
this: window__
number1: undefined__
number2: undefined__
sum: fn()__

#### 2. Phase: Execution
window: global object__
this: window__
number1: 10__
number2: 20__
sum: fn()__

### Function Execution context for the code executed : 
#### 1. Phase: Creation
this: window__
n1: undefined__
n2: undefined__

#### 2. Phase: Execution
this: window__
n1: 10__
n2: 20__