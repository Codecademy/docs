---
Title: ".charAt()"
Description: "Returns a single character at the specified index of a string."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Returns a single character at the specified index of a string.

## Syntax

```js
string.charAt(index);
```

`index` is a required parameter representing the index of the character you want to return.

## Examples

Find the first character in a string:

```js
const greeting = 'Hello World';

const firstLetter = greeting.charAt(0);

console.log(firstLetter);
// Output: H
```

Find the last character in a string:

```js
const greeting = 'Hello World';

const lastLetter = greeting.charAt(greeting.length - 1);

console.log(lastLetter);
// Output: d
```
