---
Title: '.substr()'
Description: 'Extracts a portion of a string starting from a specified position extending up to a specified number of characters.'
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

The **`.substr()`** method in JavaScript extracts a portion of a string, starting from a specified index position and extending for a specified number of characters. Indexing begins at zero. If a negative index is provided, it indicates the position from the end of the string, allowing extraction starting from the specified number of characters from the end.

## Syntax

```pseudo
string.substr(start, length);
```

- `start`: The index position in the string where extraction begins. If negative, it counts from the end of the string.
- `length`: The number of characters to extract. It is an optional parameter. If omitted, the extraction continues to the end of the string.

## Example

The example below shows the use of `.substr()` method in multiple ways:

```js
// Extracting a portion of a string with a specified length.
var sentence1 = 'The Intro to JavaScript is fun to learn.';
console.log(sentence1.substr(4, 19));

// Extracting a portion of a string _without_ a specified length.
var sentence2 = 'The Intro to JavaScript is fun to learn.';
console.log(sentence2.substr(4));

// Extracting from the end of a string.
var sentence3 = 'The Intro to JavaScript is fun to learn.';
console.log(sentence3.substr(-27, 10));
```

The example above will print the following on the console:

```shell
Intro to JavaScript
Intro to JavaScript is fun to learn.
JavaScript
```

## Codebyte Example

```codebyte/javascript
const text = 'The Intro to JavaScript is fun to learn.';

// Original string
console.log(text);

// Extracting from the end of a string up to a given length
console.log(text.substr(-27, 17));
```

> Note: The `.substr()` method does not change the original string.
