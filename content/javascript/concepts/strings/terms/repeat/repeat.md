---
Title: '.repeat()'
Description: 'Repeats a string a specified number of times. String will be concatenated.'
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

The `.repeat()` string method repeats a string a specified number of times. String will be concatenated.

## Syntax

```js
string.repeat(count);
```

`count` is an number between `0` and `Infinity`, indicating the number of times to repeat a string. If the number is a decimal value, it is rounded down to the nearest integer.

## Example

Repeating a string a specified number of times:

```js
console.log('Berlin is my favorite city! '.repeat(2));
// Output: Berlin is my favorite city! Berlin is my favorite city!
```

## Codebyte Example

The following is runnable, and demonstrates the use of the `.repeat()` method:

```codebyte/javascript
const myString = 'I love JavaScript! '

// Using integer value
console.log(myString.repeat(2));

// Using decimal value that gets rounded down from 3.5 to 3
console.log(myString.repeat(3.5));
```
