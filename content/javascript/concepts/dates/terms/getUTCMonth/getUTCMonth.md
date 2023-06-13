---
Title:
‘.getUTCMonth()'
Description:
‘Method of date instances that returns the month date according to universal time, as a zero-based value (where zero indicates the first month of the year).' 
Subjects: 
  - ‘Web Development’
  - ‘Computer Science’
Tags:
  - ‘Date’
  - 'Methods’
CatalogContent:
 - 'introduction-to-javascript'
---

get methods retrieve the date components based on the user’s local timezone settings. For increased control over the dates and times, you can use the **`.getUTCMonth()`** method, which are exactly the same as the `getMonth()` method, except they calculate the time based on the UTC (Coordinated Universal Time) standard.

## Syntax
```
const today = new Date();
const month = today.getUTCMonth();
```
Example above assigns the month portion of the current `Date` to the variable `month`.

## Example
```js
const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(date1.getUTCMonth());
// expected output December: 11

console.log(date2.getUTCMonth());
// expected output January: 0
```