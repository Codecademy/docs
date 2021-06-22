---
Title: ".getMonth()"
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

Get the month in the specified date according to local time.

## Syntax

```js
Date.getMonth();
```

The return value of `getMonth()` will only be an integer number between `0` and `11`, which represent the month.

`0` represent January, `1` represent February, `2` represent March and so on.

## Example

Getting the minutes:

```js
const x = new Date('June 22, 2021 10:41:30');
console.log(x.getMonth());
// Output: 5
```
