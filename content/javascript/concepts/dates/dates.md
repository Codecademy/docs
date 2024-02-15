---
Title: 'Dates'
Description: 'In JavaScript, Date objects represent a single moment in time stored as a number, representing the number of milliseconds since midnight on January 1st, 1970 UTC.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Date'
  - 'Time'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

In JavaScript, `Date` objects represent a single moment in time stored as a representation of the number of milliseconds since midnight on January 1st, 1970 UTC.

**Note:** This is different from a UNIX timestamp, which is the number of seconds since the Epoch (Midnight UTC on January 1st, 1970). Even though the representation of a `Date` is in UTC, the methods to fetch a date or its components work in the host system's local time zone (which may differ from UTC).

## Syntax

```pseudo
const myDate = new Date(dateValue);
```

The `dateValue` can be any of the following:

- It can be a [string](https://www.codecademy.com/resources/docs/javascript/strings) representation of a date that is valid and [IETF-compliant](https://datatracker.ietf.org/doc/html/rfc2822#page-14).
- It can be another instance of the `Date` class.
- It can be an integer that represents the date measured in milliseconds since January 1st, 1970 UTC.

The defined range for a `Date` value is between April 20, 271821 BCE to September 13, 275760 CE. Individual datetime elements can be defined in the `Date()` constructor with the following syntax:

```pseudo
const d = new Date(year, month, day, hour, minute, second, millisecond);
```

### Date Format Types

In JavaScript, the following three date format types are commonly used:

|              Format Type              | Syntax                                              |
| :-----------------------------------: | --------------------------------------------------- |
| ISO Date (The International Standard) | `new Date("YYYY-MM-DDThh:mm:ss.sssZ)`               |
|              Short Date               | `new Date("YYYY-MM-DD")` / `new Date("YYYY/MM/DD")` |
|               Long Date               | `new Date("Mon DD YYYY")` ( or `"DD Month YYYY"`)   |

With regard to ISO dates:

- It is the only format that is strictly enforced while the others may vary in functionality depending on the browser.
- "YYYY-MM-DD" or "YYYY/MM/DD" is the preferred format.
- In the output, the `T` separates the date from the time while the `Z` represents the UTC timezone.
- Existing dates can be converted to ISO with the [`.toISOString()`](https://www.codecademy.com/resources/docs/javascript/dates/toISOString) method.

With regard to short dates:

- It is best practice to use leading zeros when referring to single-digit calendar days.
- If using "YYYY-MM-DD" returns `NaN` the alternative format "YYYY/MM/DD" should be tested (and vice versa).

With regard to long dates:

- The day and month can be in any order.
- The month can either be abbreviated ("Mar") or written in full ("March").
- Names are case-sensitive and commas can be ignored. (e.g. `new Date("MONTH DD YYYY")`)

## Example

When used as a function, `Date()` returns the current date and time. When used as a constructor, `Date()` returns a new date object.

```js
const now = Date();
console.log(now);

const then = new Date();
console.log(then);
```

The output from the snippet above would look similar to this:

```shell
Fri Apr 22 2022 17:59:19 GMT+0000 (Coordinated Universal Time)
2022-04-22T17:59:19.244Z
```

## Codebyte Example

The example below defines a new `Date` object `d`. Many instance methods are used, which can be found at the bottom of this entry.

```codebyte/javascript
let d = new Date('2019-05-01 12:00:00.000');

console.log(d.toDateString());
console.log(d.getFullYear());
console.log(d.toISOString());
console.log(d.toUTCString());

d.setFullYear(2020);
d.setHours(16);
d.setMinutes(30);

console.log(d.toISOString());
console.log(d.getTime());
```
