---
Title: 'Modules'
Description: 'Modules organize code by separating related functions, classes, and variables into distinct files, making management and reuse easier in larger projects.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Modules'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Modules divide large programs into separate files based on tasks, grouping related functions, variables, or classes for easier management and reuse.

Suppose a file named **greetPerson.js** contains the following code:

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

To prevent naming conflicts, it is important to rename variables or functions when exporting or importing. This ensures the program uses the correct values from the intended file.

### Rename in the export file (the module)

```js
// In module.js
export { function1 as newName1, function2 as newName2 };
```

```js
// In main.js
import { newName1, newName2 } from './module.js';
```

When exporting from module.js, new names (`newName1`, `newName2`) are assigned to functions, the new names must be used when importing and referencing them.

### Rename in the import file (the main file)

```js
// In module.js
export { function1, function2 };
```

```js
// In main.js
import { function1 as newName1, function2 as newName2 } from './module.js';
```

When importing the function, new names (`newName1`, `newName2`) are used. These new names are then used to reference the functions in the code.

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
