---
Title: ".getHours()"
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

Get the hour for the specified date, according to local time.

## Syntax

```js
Date.getHours();
```

The return value of `getHours()` will only be an integer number between `0` and `23`, which represent the hour for the given date according to local time.

## Example

Getting the hour:

```js
const x = new Date('June 22, 2021 10:41:30');
console.log(x.getHours());
// Output: 10
```
