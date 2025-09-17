---
Title: '.endsWith()'
Description: 'Checks if a string ends with a specified substring, returning true if it does and false otherwise.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.endsWith()`** JavaScript string method checks whether a string ends with a given substring, returning `true` if it does and `false` otherwise. It returns `true` when the specified string is empty (`""`). The method is case-sensitive.

## Syntax

```pseudo
string.endsWith(searchString, endPosition);
```

**Parameters:**

- `searchString`: The characters to search for at the end of `string`.
- `length` (optional): If provided, it considers only the first [`length`](https://www.codecademy.com/resources/docs/javascript/strings/length) characters of the string.

## Example

In this example, the `.endsWith()` method checks if a string ends with a given substring, optionally considering only a portion of the string based on the provided length:

```js
console.log('Hello, World! This is JavaScript.'.endsWith('JavaScript.'));

console.log('Hello, World! This is JavaScript.'.endsWith('JavaScript'));

console.log('Hello, World! This is JavaScript.'.endsWith('World', 12));
```

The output of this code is:

```shell
true
false
true
```

## Codebyte Example

This codebyte example is runnable and checks whether a string, up to the specified position, ends with the given search string:

```codebyte/javascript
console.log('Does Codecademy end with my?'.endsWith('my', 15));
```
