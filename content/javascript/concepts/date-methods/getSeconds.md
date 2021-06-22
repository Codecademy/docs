---
Title: ".getSeconds()"
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

Get the seconds in the specified date according to local time.

## Syntax

```js
Date.getSeconds();
```

The return value of `getSeconds()` will only be an integer number between `0` and `59`, which represent the seconds.

## Example

Getting the minutes:

```js
const x = new Date('June 22, 2021 10:41:30');
console.log(x.getSeconds());
// Output: 30
```
