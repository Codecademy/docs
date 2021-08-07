---
Title: ".repeat()"
Description: "Repeats a string a specified number of times. String will be concatenated."
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

The `.repeat()` string method repeats a string a specified number of times. String will be concatenated.

## Syntax

```js
string.repeat(count)
```

`count` is an integer between `0` and `Infinity`, indicating the number of times to repeat a string.

## Example 1

Repeating a string a specified number of times:

```js
console.log("Berlin is my favourite city! ".repeat(2));
// Output: Berlin is my favourite city! Berlin is my favourite city!
```

## Example 2

Repeating a string a specified number of times using a decimal: 

```js
console.log("Berlin is my favourite city! ".repeat(3.5));
// Output: Berlin is my favourite city! Berlin is my favourite city! Berlin is my favourite city! 
```

The decimal will be converted to an integer. So in this case, `3.5` becomes `3`.
