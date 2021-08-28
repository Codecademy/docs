---
Title: "Modules"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Modules"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---

As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, we can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.

Module is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc. Let's see an example,

Suppose, a file named **greetPerson.js** contains the following code:

```js
// exporting a function
export function greetPerson(name) {
    return `Hi, ${name}`;
}
```

Now, to use the code of **greetPerson.js** in another file, you can use the following code:

```js
// importing greetPerson from greetPerson.js file
import { greetPerson } from './greetPerson.js';

// using greetPerson() defined in greetPerson.js
let displayName = greetPerson('Codecademy');

console.log(displayName); // Hi, Codecademy
```

Here,

- The `greetPerson()` function in the **greetPerson.js** is exported using the `export` keyword

   ```js
   export function greetPerson(name) {
     ... 
   }
   ```

- Then, we imported `greetPerson()` in another file using the `import` keyword. To import functions, objects, etc., you need to wrap them around `{ }`.

  ```js
  import { greetPerson } from '/.greetPerson.js';
  ```

## Export Multiple Objects

It is also possible to export multiple objects from a module. For example,
In the file **module.js**

```js
// exporting the variable
export const name = 'Codecademy JavaScript Program';

// exporting the function
export function difference(x, y) {
    return x - y;
}
```

In main file,

```js
import { name, difference } from './module.js';

console.log(name);
let diff = difference(9, 5);
console.log(diff); // 4
```

Here,

```js
import { name, difference } from './module.js';
```

This imports both the `name` variable and the `difference()` function from the **module.js** file

## Renaming imports and exports

If the objects (variables, functions etc.) that you want to import are already present in your main file, the program may not behave as you want. In this case, the program takes value from the main file instead of the imported file.

To avoid naming conflicts, you can rename these functions, objects, etc. during the export or during the import .

### 1. Rename in the module (export file) 

```js
// renaming import inside module.js
export {
    function1 as newName1,
    function2 as newName2
};

// when you want to use the module
// import in the main file
import { newName1, newName2 } from './module.js';
```

Here, while exporting the function from **module.js** file, new names (here, `newName1` & `newName2` ) are given to the function. Hence, when importing that function, the new name is used to reference that function.

### 2. Rename in the import file 

```js
// inside module.js
export {
    function1,
    function2
};

// when you want to use the module
// import in the required file with different name

import { function1 as newName1, function2 as newName2 } from './module.js';
```

Here, while importing the function, the new names (here, `newName1` & `newName2` ) are used for the function name. Now you use the new names to reference these functions.

## Default Export

You can also perform default export of the module. For example,
In the file greetPerson.js:

```js
// default export
export default function greetPerson(name) {
    return `Hi, ${name}`;
}

export const age = 23;
```

Then when importing, you can use:

```js
import random_name from './greetPerson.js';
```

While performing default export,

- `random_name` is imported from `greetPerson.js`. Since, `random_name` is not in `greetPerson.js`, the default export (`greetPerson()` in this case) is exported as `random_name`.
- You can directly use the default export without enclosing curly brackets `{}`.

## Modules Always use Strict Mode

By default, modules are in strict mode. For example,

```js
// in greetPerson.js
function greetPerson() {
    // strict by default
}

export greetPerson();
```
