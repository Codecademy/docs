---
Title: 'Modules'
Description: 'As the program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, modules can be used to separate codes in separate files as per their functionality. This makes the code more organized and easier to maintain. A module is a file that contains code that performs a specific task. A module may contain variables, functions, classes, etc. Suppose, a file named greetPerson.js contains the following code: js // Exporting a function export function greetPerson(name) { return Hi, ${name};'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Modules'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

As the program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, modules can be used to separate codes in separate files as per their functionality. This makes the code more organized and easier to maintain.

A module is a file that contains code that performs a specific task. A module may contain variables, functions, classes, etc.

Suppose, a file named **greetPerson.js** contains the following code:

```js
// Exporting a function
export function greetPerson(name) {
  return `Hi, ${name}`;
}
```

Now, to use the code of **greetPerson.js** in another file **main.js**, the following code can added to the other file:

```js
// Importing greetPerson from greetPerson.js file
import { greetPerson } from './greetPerson.js';

// Using greetPerson() defined in greetPerson.js
let displayName = greetPerson('Codecademy');

console.log(displayName);
// Output: Hi, Codecademy
```

Two things happened:

- In the **greetPerson.js** file, the `greetPerson()` function is exported using the `export` keyword.

  ```js
  export function greetPerson(name) {
    ...
  }
  ```

- In the **main.js** file, the `greetPerson()` function is imported using the `import` keyword.

  ```js
  import { greetPerson } from '/.greetPerson.js';
  ```

Note that there are `{` `}` wrapped around the function in the import syntax.

## Export Multiple Objects

It is also possible to export multiple objects from a module.

For example, suppose there's a **module.js** file:

```js
// Exporting the variable
export const name = 'Codecademy Docs';

// Exporting the function
export function difference(x, y) {
  return x - y;
}
```

In main file **main.js**:

```js
import { name, difference } from './module.js';

console.log(name); // Output: Codecademy Docs

let diff = difference(9, 5);

console.log(diff); // Output: 4
```

Here, both the `name` variable and the `difference()` function from the **module.js** file are imported to **main.js**.

## Renaming Imports and Exports

If the objects (variables, functions, etc.) that you want to import are already present in your main file, the program may not behave as you want. In this case, the program takes value from the main file instead of the imported file.

To avoid naming conflicts, you can rename these objects during the export or during the import.

### Rename in the export file (the module)

```js
// In module.js
export { function1 as newName1, function2 as newName2 };
```

```js
// In main.js
import { newName1, newName2 } from './module.js';
```

Here, while exporting the function from **module.js** file, new names (here, `newName1` & `newName2`) are given to the function. Hence, when importing that function, the new name is used to reference that function.

### Rename in the import file (the main file)

```js
// In module.js
export { function1, function2 };
```

```js
// In main.js
import { function1 as newName1, function2 as newName2 } from './module.js';
```

Here, while importing the function, the new names (here, `newName1` & `newName2`) are used for the function name. Now you use the new names to reference these functions.

## Default Export

You can also perform default export of the module. In the file **greetPerson.js**:

```js
// Default export
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

- `random_name` is imported from **greetPerson.js**. Since `random_name` is not in **greetPerson.js**, the default export (`greetPerson()` in this case) is exported as `random_name`.
- You can directly use the default export without enclosing curly brackets `{}`.

## Modules Always use Strict Mode

By default, modules are in strict mode. For example:

```js
// In greetPerson.js
function greetPerson() {
  // Strict by default
}

export greetPerson();
```
