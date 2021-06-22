---
Title: ".getMinutes()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Date"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Get minutes in a specified date according to local time.

## Syntax

```js
Date.getMinutes();
```

The return value of `getMinutes()` will only be an integer number between `0` and `59`, which represent the minutes.

## Example

Getting the minutes:

```js
const x = new Date('June 22, 2021 10:41:30');
console.log(x.getMinutes());
// Output: 41
```
