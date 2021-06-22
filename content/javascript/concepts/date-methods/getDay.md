---
Title: ".getDay()"
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

Get the day of the week for the specified date according to local time.

## Syntax

```js
Date.getDay();
```

The return value of `getDay()` will only be an integer number between `0` and `6`.

`0` represent Sunday, `1` represent Monday, `2` represent Tuesday and so on.

## Example

Getting the day:

```js
const x = new Date('June 22, 2021 10:41:30');
console.log(x.getDay());
// Output: 2
```
