---
Title: '.at()'
Description: 'Returns the character at a given index, supporting positive and negative integers.'
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

In JavaScript, the **`.at()`** method allows direct access to the string's character at the specified position. Unlike the [`.charAt()` method](https://www.codecademy.com/resources/docs/javascript/strings/charAt), `.at()` allows both positive and negative integers as an argument. Positive integers count indices from the start of the string, while negative integers count from the back.

## Syntax

```pseudo code
string.at(idx);
```

- `string`: The string from which the character will be accessed.
- `idx`: An integer representing the position of the character to be accessed. Positive integers start from the front of the string, while negative integers start from the back.

## Example

The following example demonstrates the use of the `.at()` function to access characters at various positions:

```js
const word = 'Codecademy is fun!';

// accessing the first character
console.log(word.at(0));

// accessing the last character with negative indexing
console.log(word.at(-1));

// attempting to access a character beyond the string's length
console.log(word.at(100));
```

The above code will give the following output:

```shell
C
!
undefined
```

> **Note:** The `.at()` method provides easy access of characters from the back using negative indexing, which is much simpler when compared to the `.charAt()` method. It also returns `undefined` for out-of-bound indices, unlike `.charAt()` which returns an empty string.

## Codebyte Example

```codebyte/js
console.log('Data Structures'.at(0));

console.log('Sofware Development'.at(-2));

console.log('2024'.at(3));
```
