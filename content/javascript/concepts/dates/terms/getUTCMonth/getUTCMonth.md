---
Title: '.getUTCMonth()'
Description: 'Returns the month of the passed date according to universal time, as a zero-based value.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Get methods are used to retrieve date components based on the user’s local timezone settings. The **`.getUTCMonth()`** method returns the month of the date passed, similar to `.getMonth()`. However, `.getUTCMonth()` calculates the time based on the UTC (Coordinated Universal Time) standard.

## Syntax

```pseudo
const today = new Date();
const month = today.getUTCMonth();
```

Example above assigns the month portion of the current `Date` to the variable `month`.

## Example

```js
const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(date1.getUTCMonth());

console.log(date2.getUTCMonth());
```

This results in the following output:

```shell
11
0
```
