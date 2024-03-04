---
Title: '.setUTCMinutes()'
Description: 'Changes the minutes for a given date according to universal time (UTC).'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Date'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setUTCMinutes()`** method changes the minutes of a `Date` instance according to universal time (UTC).

## Syntax

```pseudo
setUTCMinutes(minutes)
setUTCMinutes(minutes, seconds)
setUTCMinutes(minutes, seconds, ms)
```

- `minutes`: An integer value between 0 and 59 representing the minutes.
- `seconds`: An integer value between 0 and 59 representing the seconds. If `seconds` is specified, `minutes` must also be specified.
- `ms`: An integer value between 0 and 999 representing the milliseconds. If `ms` is specified, `minutes` and `seconds` must also be specified.

If `seconds`and `ms` are not specified, the values returned from [getUTCSeconds()](https://www.codecademy.com/resources/docs/javascript/dates/getUTCSeconds) and [getUTCMilliseconds()](https://www.codecademy.com/resources/docs/javascript/dates/getUTCMilliseconds) methods are used.

The method changes the `Date` instance and returns the modified timestamp. If a parameter is `NaN`, the date is invalid and `NaN` is returned.

## Example

In the following example, the `.toUTCString()` method converts a `Date` object to a string representation using the UTC timezone.

```js
const date = new Date(Date.UTC(2023, 5, 23, 12, 34, 56)); // Year, Month , Day, Hour, Minute, Second
console.log('Before:', date.toUTCString()); // Before: Wed, 23 Jun 2023 12:34:56 GMT

date.setUTCMinutes(45);

console.log('After:', date.toUTCString()); // After: Wed, 23 Jun 2023 12:45:56 GMT
```

This example results in the following output.

```shell
Before: Wed, 23 Jun 2023 12:34:56 GMT
After: Wed, 23 Jun 2023 12:45:56 GMT
```
