**What is the difference between var, let, and const?**
The Difference between var, let, and const is 
**var**
- Introduced in ES5
- Scope: Function-scoped (or global if outside a function).
- Hoisting: Hoisted and initialized with undefined.
- Re-declaration: Allowed.
- Re-assignment: Allowed.

**let**
- Introduced in ES6 (2015).
- Scope: Block-scoped (only works inside { }).
- Hoisting: Hoisted but kept in the Temporal Dead Zone until declared.
- Re-declaration: Not allowed in the same scope.
- Re-assignment: Allowed.
 
**const**
 - Introduced in ES6 (2015).
 - Scope: Block-scoped.
 - Hoisting: Hoisted but kept in the Temporal Dead Zone until declared.
 - Re-declaration: Not allowed.
 - Re-assignment: Not allowed.
   
 **What is the difference between map(), forEach(), and filter()?**

 **forEach()**
 Purpose: Executes a function for each element in an array
 Return Value: Does not return a new array (returns undefined).
 Use Case: Just for performing operations (like logging, updating values, etc.).

 **map()**
  Purpose: Transforms each element and returns a new array of the same length.
  Return Value: New array with modified elements.
  Use Case: When you want to create a new array based on existing data.

 **filter()**
 Purpose: Filters elements based on a condition.
 Return Value: New array with elements that pass the condition.
 Use Case: When you want a subset of the array.

 **What are arrow functions in ES6?**
 Arrow functions were introduced in ES6 (ECMAScript 2015) as a shorter and cleaner way of writing functions in JavaScript.
 They allow developers to define functions without using the function keyword, making the syntax more concise. One of the
 most important characteristics of arrow functions is that they do not have their own this context; instead, they inherit
 this from the surrounding lexical scope. This makes them very useful when working with callbacks or functions inside
 objects, where maintaining the correct this value is important. Arrow functions also do not have their own arguments
 object, and they cannot be used as constructors with the new keyword. Overall, arrow functions improve readability
 and make code more compact, especially when used for simple operations, callbacks, and array methods like map,
 filter, and reduce.
    
 **How does destructuring assignment work in ES6?**
 Destructuring assignment in ES6 is a convenient way to extract values from arrays or properties from objects and
 assign them to variables in a single statement. Instead of accessing elements one by one, destructuring allows
 developers to “unpack” data directly into separate variables, which makes the code more readable and concise. In
 arrays, the order of elements determines which values are assigned, while in objects, variable names must match
 the property names to extract values. Destructuring also supports default values, nested structures, and skipping
 unwanted items, giving developers a powerful and flexible way to handle data. This feature is widely used when
 working with function parameters, APIs, and complex data structures, as it reduces repetition and improves
 clarity in JavaScript code.
 **Explain template literals in ES6. How are they different from string concatenation?**
 Template literals, introduced in ES6, are a modern way of working with strings in JavaScript. They use backticks
 (`) instead of quotes and provide powerful features like embedding variables and expressions directly inside
 strings using the ${} syntax. Unlike traditional string concatenation, which requires the use of the + operator
 to join strings and variables, template literals allow cleaner and more readable code. They also support
 multi-line strings without the need for escape characters, making them especially useful for formatting
 text or creating dynamic messages. Overall, template literals make string handling more concise, easier to
 maintain, and more flexible compared to traditional string concatenation.
