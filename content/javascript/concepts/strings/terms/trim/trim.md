---
Title: '.trim()'
Description: 'Remove existing whitespace from both ends of a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Remove existing whitespace from both ends of a string.

## Syntax

```js
string.trim();
```

## Example

Removing all existing whitespace from both ends of a string using `.trim()` method:

```js
console.log('  Hello World   '.trim());
// Output: Hello World
```

## Codebyte Example

The following example demonstrates the `.trim()` method:

```codebyte/javascript

//Create a variable with whitespace.
const space = '   I have space  ';

//Print the variable.
console.log(space);

//Now print variable with .trim()
console.log(space.trim());
```