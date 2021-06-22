---
Title: ".getDate()"
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

Get the date of the month according to the local time.

## Syntax

```js
Date.getDate();
```

The return value of `getDate()` will only be an integer number between `1` and `31`, which represent the date.

## Example

Getting the date:

```js
const x = new Date('June 22, 2021 10:41:30');
console.log(x.getDate());
// Output: 22
```
