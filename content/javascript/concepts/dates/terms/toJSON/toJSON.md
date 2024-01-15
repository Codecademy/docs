---
Title: '.toJSON()'
Description: 'Returns a string representation of a date in the JavaScript date time string format.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Date'
  - 'Functions'
  - 'Methods'
  - 'Time'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The method **`.toJSON()`** takes a Date object and returns a string representation of that Date in the [JavaScript date time string format](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format). This format is as follows:

```shell
YYYY-MM-DDTHH:mm:ss.sssZ
```

Required elements:

- `YYYY`: Four digits representing a year.

Optional elements:

- `MM`: Two digits representing a month.
- `DD`: Two digits representing a day.
- `HH`: Two digits representing the number of hours since midnight of the day above.
- `mm`: Two digits representing the number of minutes since the hour above.
- `ss`: Two digits representing the number of seconds since the minute above.
- `sss`: Three digits representing the number of milliseconds since the second above.
- `Z`: A character or series of characters representing a time zone offset from UTC.

`.toJSON()` gives an equivalent return value to [`.toISOString()`](https://www.codecademy.com/resources/docs/javascript/dates/toISOString) as long the value of the Date object is valid. If the value is invalid, `.toJSON()` will return `null`, whereas `.toISOString()` will throw a `RangeError`.

## Syntax

```pseudo
date.toJSON()
```

- `date`: The Date object which `.toJSON()` returns a string representation of.

## Example

The following example declares a Date object and passes it to `.toJSON()`.

```js
const meleeDay = new Date('2001-11-21');
console.log(meleeDay.toJSON());
```

The above example will give the following output:

```shell
2001-11-21T00:00:00.000Z
```

## Codebyte Example

Try changing the value of `yourDate` below to test the behavior of `.toJSON()`:

```codebyte/javascript
const yourDate = new Date('Change the value of this string!');
console.log(yourDate.toJSON());
```
