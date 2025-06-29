---
Title: '.endsWith()'
Description: 'Checks whether a string ends with the specified characters. It returns true if it does, otherwise false.'
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

The **`.endsWith()`** JavaScript string method checks whether a string ends with the characters of a specified string, returning `true` if the string ends with the specified characters and `false` otherwise. An empty string (`""`) as the specified string  returns `true`. The method is case-sensitive. 

## Syntax

```pseudo
string.endsWith(searchString, endPosition);
```

- The `searchString` specifies the characters that will be checked for at the end of the string. It is case-sensitive.
- The `endPosition` is the position within the string to be treated as the end. It is optional and defaults to `string.length`.

## Example

Checking if a string ends with a string:

```js
console.log('Hello, World! This is JavaScript.'.endsWith('JavaScript.'));
// Output: true

console.log('Hello, World! This is JavaScript.'.endsWith('JavaScript'));
// Output: false

console.log('Hello, World! This is JavaScript.'.endsWith('World', 12));
// Output: true
```

## Codebyte Example

The following example is runnable and checks if a string, ending at the specified position, ends with the specified searchString:

```codebyte/javascript
console.log('Does Codecademy end with my?'.endsWith('my', 15));
// Output: true
```
