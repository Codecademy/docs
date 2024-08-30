---
Title: '.charAt()'
Description: 'Returns a single character at the specified index of a string.'
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

Returns a single character at the specified index of a string.

## Syntax

```pseudo
string.charAt(index);
```

`index` is a required parameter representing the index of the character to be returned.

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

## Codebyte Example

The following is runnable, and demonstrates the use of the `.charAt()` method:

```codebyte/javascript
const myString = 'I love JavaScript! ';

// Using integer value
console.log(myString.charAt(2));

// Using decimal value that gets rounded down from 3.5 to 3
console.log(myString.charAt(3.5));
```
