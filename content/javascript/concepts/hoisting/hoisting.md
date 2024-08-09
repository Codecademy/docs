---
Title: 'Hoisting'
Description: 'Hoisting is a default process where JavaScript "splits" var and function declarations from their definitions. These declarations are "moved up" to the top of the file above where they were defined and/or used. This means that JavaScript knows about these declarations before the rest of the code is executed. In JavaScript, variables declared with the var keyword are hoist-able. For example: js console.log(My name is ${myName}.); // Output: My name is undefined. var myName = Brandon;  In the code block, we are logging myName to the console before it is declared and assigned. Doing so will yield undefined. While JavaScripts compiler has stored the declaration for myName in memory, its definition is still not known. Therefore, its value and type is undefined.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Variables'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Hoisting is a default process where JavaScript "splits" `var` and `function` declarations from their definitions. These declarations are "moved up" to the top of the file above where they were defined and/or used. This means that JavaScript knows about these declarations before the rest of the code is executed.

### Variables

In JavaScript, variables declared with the `var` keyword are hoist-able. For example:

```js
console.log(`My name is ${myName}.`); // Output: My name is undefined.

var myName = 'Brandon';
```

In the code block, we are logging `myName` to the console before it is declared and assigned. Doing so will yield `undefined`. While JavaScript's compiler has stored the _declaration_ for `myName` in memory, its _definition_ is still not known. Therefore, its value and type is `undefined`.

During the execution phase, the code will refactor like this:

```js
var myName;

console.log(`My name is ${myName}.`); // Output: My name is undefined.

myName = 'Brandon';
```

If we tried to log a variable that hasn't been defined yet, we'd get a `ReferenceError`:

```js
console.log(`My name is ${name}.`); // --> ReferenceError

var myName = 'Brandon';
```

### Functions

In addition to variables, functions can be hoisted in JavaScript. This is mainly because they are "first-class objects" and they can be stored as variables. The declarations for functions, like the ones for variables, are hoisted during the execution phase:

```js
console.log(greetings()); // Output: Hi! My name is Brandon.

function greetings() {
  var myName = 'Brandon';
  console.log(`Hi! My name is ${myName}.`);
}
```

The output would be:

```shell
Hi! My name is Brandon.
undefined
```

In the code above, we wrote a log statement for executed `greetings()` function, which is defined below. Inside `greetings()`, we declare a local variable `myName` defined as a string. Next, we finish the function by logging a phrase to the console (with `myName` interpolated within). Notice how even though `greetings()` was logged before it was completely defined, the body of the function run anyways. If we try logging just the function without parentheses:

```js
console.log(`${greetings}`);

function greetings() {
  var myName = 'Brandon';
  console.log(`Hi! My name is ${myName}.`);
}
```

The output would be:

```shell
function greetings() {
   var myName = "Brandon";
   console.log(`Hi! My name is ${myName}.`);
}
```

Because `greetings` was defined as _function declaration_, the entire function was hoisted into memory by JavaScript. However, if `greetings` were written as a function stored in a variable (a _function expression_), then the function definition would _not_ be accessible. Its value and type would be `undefined` like any other hoisted variable.

```js
console.log(greetings);

var greetings = function () {
  var myName = 'Brandon';
  console.log(`Hi! My name is ${myName}.`);
};
```

The output would be:

```shell
undefined
```

If we try to execute `greetings` and log the result to the console, JavaScript does something interesting:

```js
console.log(typeof greetings); // undefined

console.log(greetings());

var greetings = function () {
  var myName = 'Brandon';
  console.log(`Hi! My name is ${myName}.`);
};
```

It returns an error:

```error
TypeError: greetings is not a function
   at Object.<anonymous> ...
```

First, we logged the type of `greetings` just to remind what the type for the hoisted variable is. Next, we attempted to log the executed `greetings()` function to the console and received a `TypeError` stating that we are not dealing with a function.

How is that possible? Again, at this point in the execution phase, the hoisted `greetings` variable is of type `undefined`. The definition of greetings as a function doesn't happen until the _next_ line. Therefore, JavaScript threw the `TypeError`.

### `let` and `const`

Hoisting is a great way of understanding how the execution context in JavaScript affects variable and function declarations. However, with the introduction of new syntax in ES2015 (ES6), hoisting treats variables declared with `let` or `const` differently.

As of ES6, `let` and `const` are recommended for replacing `var` when declaring variables. In the context of hoisting, all three of these keywords are moved to the top of their scopes during the execution phase. But `let` and `const` behave differently where, if no definition was provided before hoisting, the hoisted declaration won't be initialized with `undefined` or any other value. This will, in turn, throw a `ReferenceError`.

```js
// Before hoisting

console.log(`My name is ${myName}.`);
let myName = 'Brandon';

// After hoisting

let myName;
console.log(`My name is ${myName}.`); // ReferenceError: Cannot access 'myName' before initialization
myName = 'Brandon';
```

In the code above, we logged the phrase with myName to the console. On the next line, we declared and defined `myName` using `let` and "Brandon", respectively. During the execution phase, the `let myName` declaration is hoisted up, but the initialization is left below. Because of how `let` works, the log statement threw the `ReferenceError`. This can be avoided if initialization occurs before the log statement.

```js
// Before hoisting

let myName = 'Brandon';
console.log(`My name is ${myName}.`);

// After hoisting

let myName;
myName = 'Brandon';
console.log(`My name is ${myName}.`); // Output: My name is Brandon.
```

With `const` declarations, initialization is required before execution. Unlike `var` and `let`, these variables can't be declared and defined separately.

```js
// This will work

var name1;
name1 = "Megan";
console.log(name1); // Output: Brandon

// This will also work

let name2;
name2 = "Joe";
console.log(name2); // Output: Joe

// This will not work

const name3;
name3 = "James";
console.log(name3); // SyntaxError: Missing initializer in const declaration
```

The reason `let` and `const` variables cannot be used before they have been initialized is that they will be in a "Temporal Dead Zone" (TDZ).
For a given variable declared with `let` or `const`, TDZ is the scope which is from the start of the block to the initialization line of that variable.

```js
/* Line 1 in TDZ, cannot read or write the variable foo */
/* Line 2 */ let foo = 4;
/* Line 3 Now, can read and write the variable foo */
```

Accessing variables and functions before they are declared is bad practice because it is hard to understand and confusing for people who read your code. With `var`, you may read or change the variable unintentionally before initialization, but JavaScript doesn't give you an error that you may be doing something wrong. Thanks to `let`, `const`, and TDZ, we can avoid and catch many potential bugs.
