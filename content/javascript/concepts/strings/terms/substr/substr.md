---
Title: '.substr()'
Description: 'Extracts a portion of a string, starting from a specified position up to a given number of characters.'
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

The `.substr()` method in JavaScript extracts a portion of a string, starting from a specified index position up to a given number of characters. The index count begins with zero.

## Syntax

```js
string.substr(startingIndex, length);
```

- `startingIndex`: determines the index from which the substring will begin.
- `length`: (optional) is the number of characters to extract.

If `length` is not provided, `.substr()` will extract the rest of the characters until the end of the string.

## Example 1

Extracting a portion of a string with a specified `length`.

```js
console.log('The Intro to JavaScript is fun to learn.'.substr(4, 19));
// Output: Intro to JavaScript
```

## Example 2

Extracting a portion of a string _without_ a specified `length`.

```js
console.log('The Intro to JavaScript is fun to learn.'.substr(4));
// Output: Intro to JavaScript is fun to learn.
```

## Codebyte Example

The `.substr()` method does not change the original string. Also, it can extract from the end of the string when provided with a negative starting index position.

```codebyte/js
const text = 'The Intro to JavaScript is fun to learn.';

// Extracting from the end of the string
console.log(text.substr(-27, 10));

// Original string
console.log(text);
```
