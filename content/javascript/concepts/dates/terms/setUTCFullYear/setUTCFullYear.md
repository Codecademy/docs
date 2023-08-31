---
Title: '.setUTCFullYear()'
Description: 'Used to set the year value of a Date object in UTC (Coordinated Universal Time).'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setUTCFullYear()`** method of `Date` instances changes the year for the date according to UTC (Coordinated Universal Time).

## Syntax

```pseudo
myDate.setUTCFullYear(yearValue)
myDate.setUTCFullYear(yearValue, monthValue)
myDate.setUTCFullYear(yearValue, monthValue, dateValue)
```

Parameters:

- `yearValue`: An integer representing the year. For example, 1995.
- `monthValue`: (Optional) An integer representing the month: 0 for January, 1 for February, and so on.
- `dateValue`: (Optional) An integer between 1 and 31 representing the day of the month. If `dateValue` is specified, `monthValue` must also be specified.

The method changes the `Date` object in place, and returns its new timestamp. If a parameter is `NaN` (or other values that get coerced to `NaN`, such as `undefined`), the date is set to `Invalid Date` and `NaN` is returned.

If the `monthValue` and `dateValue` parameters are not specified, the values returned from the `.getUTCMonth()` and `.getUTCDate()` methods are used.

> **Note:** If a parameter specified is outside of the expected range, `.setUTCFullYear()` attempts to update the other parameters and the date information in the `Date` object accordingly. For example, if 15 is specified for `monthValue`, the year is incremented by 1 (`yearValue + 1`), and 3 is used for the month.

## Example

Using `.setUTCFullYear()`:

```js
const theBigDay = new Date('2023-03-01');
theBigDay.setUTCFullYear(1997);
console.log(theBigDay);
```

This code will output the following:

```shell
1997-03-01T00:00:00.000Z
```
