---
Title: '.at()'
Description: 'Returns the character at a particular index in a string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Characters'
  - 'Index'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`.at()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) allows direct access to a character at a specified position in a string. Unlike the [`.charAt()`](https://www.codecademy.com/resources/docs/javascript/strings/charAt) method, `.at()` allows both positive and negative integers as an argument, simplifying the operation. Positive integers count indices from the start of the string, while negative integers count from the back. For example, `-1` refers to the last character, `-2` to the second last, and so on.

## Syntax

```pseudo
string.at(index);
```

- `string`: The string from which the character is to be accessed.
- `index`: An integer representing the position of the character to be accessed.

## Example

Below is an example showcasing the functionality of the `.at()` method:

```js
const word = 'Codecademy is fun!';

// Accessing the first character in the string
console.log(word.at(0));

// Accessing the last character using a negative index
console.log(word.at(-1));

// Accessing a character at a position that's beyond the string length
console.log(word.at(100));
```

The above code produces the following output:

```shell
C
!
undefined
```

> **Note:** The `.at()` method returns `undefined` for out-of-bound indices, unlike `.charAt()`, which returns an empty string.

## Codebyte Example

Run the following code to understand how the `.at()` method works:

```codebyte/javascript
console.log('Data Structures'.at(0));

console.log('Sofware Development'.at(-2));

console.log('2024'.at(3));
```
