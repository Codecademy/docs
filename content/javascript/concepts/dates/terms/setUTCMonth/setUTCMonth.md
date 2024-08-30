---
Title: '.setUTCMonth()'
Description: 'Sets the month value of a date according to Coordinated Universal Time (UTC).'
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

The **`.setUTCMonth()`** method sets the month of a `Date` object according to universal time (UTC).

## Syntax

```pseudo
dateObject.setUTCMonth(month)
dateObject.setUTCMonth(month, day)
```

The `.setUTCMonth()` method is called on `dateObject` with the integer input argument `month`, and optionally `day`.

- `month` (required): Expected values are in the range between `0-11`, but other values are accepted:

  - `-1` will set `dateObject` to the last month of the previous year
  - `12` will set `dateObject` to the first month of the following year

- `day` (optional): Expected values are in the range between `1-31`, but other values are accepted:
  - Any value smaller than `1` will roll over to the previous month (`0` will set `dateObject` to the last day of the previous month)
  - Any value greater than the number of days in a month will roll over to the following month

## Examples

This example sets the month and day and returns a variety of date formats to the console.

```javascript
const dateObject = new Date('2020-05-10T00:00:00');
dateObject.setUTCMonth(2, 20); // Month, Day (optional)

console.log(dateObject);
console.log(dateObject.toUTCString());
console.log(
  'Month: ' + dateObject.getUTCMonth(),
  '\nDay: ' + dateObject.getUTCDay()
);
```

The code above results in the following output:

```shell
2020-03-20T00:00:00.000Z
Fri, 20 Mar 2020 00:00:00 GMT
Month: 2
Day: 5
```

> **Note:** The first month of the year is `0`, the first day of the month is `1`.

This example showcases the rollover of dates with values outside of the expected range:

```javascript
const dateObject = new Date(Date.UTC(2000, 1, 2, 3, 4, 5)); // Year, Month, Day, Hour, Minute, Second, Millisecond

dateObject.setUTCMonth(0, 1); // 1st month of year, 1st day of month
console.log(dateObject, '=', dateObject.toUTCString());

dateObject.setUTCMonth(-1); // Month out of range, rolls over to previous year
console.log(dateObject, '=', dateObject.toUTCString());

dateObject.setUTCMonth(12, 32); // Month and day out of range, rolls over to following year and month
console.log(dateObject, '=', dateObject.toUTCString());
```

The code above results in the following output:

```shell
2000-01-01T03:04:05.000Z = Sat, 01 Jan 2000 03:04:05 GMT
1999-12-01T03:04:05.000Z = Wed, 01 Dec 1999 03:04:05 GMT
2000-02-01T03:04:05.000Z = Tue, 01 Feb 2000 03:04:05 GMT
```
