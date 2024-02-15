---
Title: '.length'
Description: 'Returns the number of items in an array or the number of characters in a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Data'
  - 'Strings'
  - 'Arrays'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.length`** property is used on arrays and strings to quickly find out how many items are in an array or how many characters are in a string. This property is straightforward to use and plays a crucial role in JavaScript, making it simple for developers to work with the data.

## Syntax

```pseudo
myString.length
```

> **Note**: The `.length` property is not a method but a property. It cannot be invoked with parentheses, like `.length()`. Instead, it can only be referenced as `.length`.

## Example

The `.length` property is applied to an array and a string, respectively, to quickly determine their sizes (number of elements for an array and number of characters for a string). This property provides a convenient and efficient way to work with data in JavaScript.

```js
const fruits = ['apple', 'banana', 'orange', 'grape'];
const numberOfFruits = fruits.length;
console.log(numberOfFruits);

const message = 'Hello, world!';
const messageLength = message.length;
console.log(messageLength);
```

This example results in the following output:

```shell
4
13
```
