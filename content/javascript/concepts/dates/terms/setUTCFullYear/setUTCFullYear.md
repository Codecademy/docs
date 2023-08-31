---
Title: 'setUTCFullYear()'
Description: 'Used to set the year value of a Date object in UTC (Coordinated Universal Time)'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

## Date.prototype.setUTCFullYear()

The **`setUTCFullYear()`** method of `Date` instances changes the year for this date according to universal time.

## Syntax

```pseudo 
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dateValue)
```

## Parameters

**`yearValue`**
- An integer representing the year. For example, 1995.

**`monthValue`** *Optional*
- An integer representing the month: 0 for January, 1 for February, and so on.

**`dateValue`** *Optional*
- An integer between 1 and 31 representing the day of the month. If you specify dateValue, you must also specify monthValue.


## Return value

Changes the *`Date`* object in place, and returns its new *`timestamp`*. If a parameter is `NaN` (or other values that get coerced to `NaN`, such as `undefined`), the date is set to Invalid Date and `NaN` is returned.


## Description

If the `monthValue` and `dateValue` parameters are not specified, the values returned from the *`getUTCMonth()`* and *`getUTCDate()`* methods are used.

If a parameter specified is outside of the expected range, `setUTCFullYear()` attempts to update the other parameters and the date information in the *`Date`* object accordingly. For example, if 15 is specified for `monthValue`, the year is incremented by 1 (`yearValue + 1`), and 3 is used for the month.


## Examples

Using `setUTCFullYear()`:

```shell
const theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```