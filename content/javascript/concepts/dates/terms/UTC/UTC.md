---
Title: '.UTC()'
Description: 'Returns a number value representing the number of milliseconds between the specified date and January 1, 1970, 00:00:00, Universal Time Coordinated. Will always be called as Date.UTC() rather than called on an instance of date such as myDate.UTC().'
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

The `.UTC()` static method of `Date` that returns a number value representing the number of milliseconds between the specified date and January 1, 1970, 00:00:00, Universal Time Coordinated. Will always be called as `Date.UTC()` rather than called on an instance of date such as `myDate.UTC()`.

## Syntax

```js
Date.UTC(year, month, day, hour, minute, second, millisecond);
```

- `year` (required): The year in four-digit format. If only two digits are specified, the year is assumed to be in twentieth century.
- `month` (optional): The range is from `0` to `11`.
- `day` (optional): The range is from `1` to `31`.
- `hour` (optional): The range is from `0` to `23`.
- `minute` (optional): The range is from `0` to `59`.
- `second` (optional): The range is from `0` to `59`.
- `millisecond` (optional): The range is from `0` to `999`.

**Note:** UTC, Universal Time Coordinated, is the time set by the World Time Standard.

## Example 1

Return the number of milliseconds between the specified date and January 1, 1970, 00:00:00, universal time.

```js
var midnight1971 = Date.UTC(1971, 00, 01, 0, 0, 0);

console.log(midnight1971);
// Output: 34214400000
```
