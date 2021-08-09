---
Title: "Dates" 
Subjects: 
  - "Web Development"
  - "Computer Science"
Tags:
  - "Date"
  - "Data Types"
CatalogContent: 
  - "introduction-to-javascript"
  - "paths/create-a-back-end-app-with-javascript"
---

`Date` objects in JavaScript represent a single moment in time stored as a number that represents the number of milliseconds since midnight on January 1st 1970 UTC. Note that this is different from the UNIX epoch, the number of *seconds* since midnight on January 1st 1970 UTC. 

Also note that, even though the representation of a `Date` is in UTC, the methods to fetch a date or its components work in the host system's local time zone.

The defined range for a `Date` value is between April 20, 271821 BCE to September 13, 275760 CE.

## Syntax

When used as a function, `Date()` returns the current date and time. When used as a constructor, `Date()` returns a new date object.

```javascript
var now = Date();

console.log(now);
// Output: Current date as a string
// Wed July 28 2021 16:47:34 GMT+0000 (Coordinated Universal Time)

var then = new Date();

console.log(then);
// Output: Current date as a Date object
// 2021-07-28T16:47:34.616Z
```

The date constructor can take several different parameters to create a new Date object.

`var d = new Date();`

- No parameter creates `Date` object with current date.

`var d = new Date(milliseconds);`

- `milliseconds` creates `Date` object based on milliseconds from midnight 1/1/1970 UTC.

`var d = new Date(dateString);`

- `dateString` creates a `Date` object based on converting the sting to a date value.

`var d = new Date(year, month, day, hour, minute, second, millisecond);`

- Or you can specify the date referred to by the `Date` object by specifying the numeric value for each component of the date.

## Date Methods

### Static Methods

| Method | Description |
| --- | --- |
| `.now()` | Returns the number of milliseconds elapsed since midnight 1/1/1970 UTC. |
| `.parse()` | Parses a string representation of a date and returns the number of milliseconds represented by that date. |

<!-- ### Instance Methods

Method|Description
---|---
`.getDate()`|Returns the day of the month (1-31) for the date represented by the `Date` object. (local time)
`.getDay()`|Returns the day of the week (0-6) for the date represented by the `Date` object. (local time)
`.getFullYear()`|Returns the year (4 digits for 4 digit years) for the date represented by the `Date` object. (local time)
`.getHours()`|Returns the hour (0-23) for the date represented by the `Date` object. (local time)
`.getMilliseconds()`|Returns the millisecond (0-999) for the date represented by the `Date` object. (local time)
`.getMinutes()`|Returns the minute (0-59)  for the date represented by the `Date` object. (local time)
`.getMonth()`|Returns the month (0-11) for the date represented by the `Date` object. (local time)
`.getSeconds()`|Returns the second (0-59) for the date represented by the `Date` object. (local time)
`.getTime()`|Returns the number of milliseconds from midnight 1/1/1970 UTC for the date represented by the `Date` object.
`.getTimezoneOffset()`|Returns the time zone offset in minutes for the current locale.
`.getUTCDate()`|Returns the day of the month (1-31) for the date represented by the `Date` object. (UTC time)
`.getUTCDay()`|Returns the day of the week (0-6) for the date represented by the `Date` object. (UTC time)
`.getUTCFullYear()`|Returns the year (4 digits for 4 digit years) for the date represented by the `Date` object. (UTC time)
`.getUTCHours()`|Returns the hour (0-23) for the date represented by the `Date` object. (UTC time)
`.getUTCMilliseconds()`|Returns the millisecond (0-999) for the date represented by the `Date` object. (UTC time)
`.getUTCMinutes()`|Returns the minute (0-59)  for the date represented by the `Date` object. (UTC time)
`.getUTCMonth()`|Returns the month (0-11) for the date represented by the `Date` object. (UTC time)
`.getUTCSeconds()`|Returns the second (0-59) for the date represented by the `Date` object. (UTC time)
`.setDate()`|Sets the day of the month for the `Date` object. (local time)
`.setFullYear()`|Sets the full year (4 digits for 4 digit years) for the `Date` object. (local time)
`.setHours()`|Sets the hour for the `Date` object. (local time)
`.setMilliseconds()`|Sets the milliseconds for the `Date` object. (local time)
`.setMinutes()`|Sets the minute for the `Date` object. (local time)
`.setMonth()`|Sets the month for the `Date` object. (local time)
`.setSeconds()`|Sets the second for the `Date` object. (local time)
`.setTime()`|Sets the date of the `Date` object by using milliseconds from midnight 1/1/1970 UTC.
`.setUTCDate()`|Sets the day of the month for the `Date` object. (UTC time)
`.setUTCFullYear()`|Sets the full year (4 digits for 4 digit years) for the `Date` object. (UTC time)
`.setUTCHours()`|Sets the hour for the `Date` object. (UTC time)
`.setUTCMilliseconds()`|Sets the milliseconds for the `Date` object. (UTC time)
`.setUTCMinutes()`|Sets the minute for the `Date` object. (UTC time)
`.setUTCMonth()`|Sets the month for the `Date` object. (UTC time)
`.setUTCSeconds()`|Sets the second for the `Date` object. (UTC time)
`.toDateString()`|Returns the date portion stored in the `Date` object as a human-readable string.
`.toISOString()`|Returns the date stored in the `Date` object in the IDO 8601 Extended Format.
`.toJSON()`|Returns the date using `.toISOString()` for use with `JSON.stringify()`.
`.toLocaleDateString()`|Returns the date portion stored in the `Date` object as a string based on the current locale.
`.toLocaleString()`|Returns the locale date string, overrides `Object.prototype.toLocaleString()`.
`.toLocaleTimeString()`|Returns the time portion stored in the `Date` object as a string based on the current locale. 
`.toString()`|Returns the date stored in the `Date` object as a human-readable string.
`.toTimeString()`|Returns the time portion stored in the `Date` object as a human-readable string.
`.toUTCString()`|Returns the date stored in the `Date` object as a human-readable string based on UTC timezone. -->

The instance methods are listed at the bottom of the page.

### Examples

```javascript
var d = new Date('2019-05-01 12:00:00.000');

console.log(d.toDateString());
// Output: Wed May 01 2019

console.log(d.getFullYear());  
// Output: 2019

console.log(d.toISOString());
// Output: 2019-05-01T12:00:00.000Z

console.log(d.toUTCString());
// Output: Wed, 01 May 2019 12:00:00 GMT

d.setFullYear(2020)
d.setHours(16)
d.setMinutes(30)

console.log(d.toISOString());
// Output: 2020-05-01T16:30:00.000Z

console.log(d.getTime());
// Output: 1588350600000
```
