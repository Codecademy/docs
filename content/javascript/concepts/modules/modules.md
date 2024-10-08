---
Title: 'Modules'
Description: 'Modules organize large programs by separating code into files by functionality. They are files that contain code for specific tasks, like variables and functions.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Modules'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A module is a file containing code for a specific task, including variables, functions, and classes. Using modules enhances maintainability in larger programs.

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

Rename objects during export or import to prevent naming conflicts with existing variables or functions in the main file, ensuring expected behavior.

### Rename in the export file (the module)

```js
// In module.js
export { function1 as newName1, function2 as newName2 };
```

```js
// In main.js
import { newName1, newName2 } from './module.js';
```

When exporting functions from the **module.js** file, new names (e.g., `newName1`, `newName2`) are assigned and used for referencing during import.


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

- `random_name` is imported from **greetPerson.js** as the default export (`greetPerson()`), since it doesn't exist in that file. 
- Default exports can be used without curly brackets `{}`.

## Modules Always use Strict Mode

By default, modules are in strict mode. For example:

```js
// In greetPerson.js
function greetPerson() {
  // Strict by default
}

export greetPerson();
```
