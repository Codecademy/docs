---
Title: '.getTimezoneOffset()'
Description: 'Returns the time zone offset in minutes between the local time and UTC.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-developer-career-path'
---

The **`.getTimezoneOffset()`** method returns the time zone offset in minutes between the user's local time and UTC (Coordinated Universal Time). The offset represents the difference in minutes between the UTC time and the local time of the user's system.

This method is particularly useful when working with time-related operations that involve time zone conversions or calculations. By using `.getTimezoneOffset()`, the current offset can be obtained and considered when performing various operations, such as displaying local time, converting between time zones, or adjusting dates and times based on the user's location.

## Syntax

```pseudo
Date.getTimezoneOffset();
```

- A `Date` object is used for working with dates and times. The object provides a way to create, manipulate, and format dates in various formats.
- A `Date` object can be created by declaring a new variable with the `new Date()` constructor.

## Example 1

The .`getTimezoneOffset()` method is called on the `Date` object, and the resulting time zone offset value in minutes is stored in the `timezoneOffset` variable. Finally, the value is printed to the console. The output will be a negative or positive integer representing the time zone offset in minutes. For example, if the output is `-300`, it means that the local time zone is 5 hours ahead of UTC.

```js
const date = new Date();
const timezoneOffset = date.getTimezoneOffset();

console.log(timezoneOffset);
```

## Example 2

In this example, a new `Date` object is created for a specific date and time, in this case, `June 28, 2023, at 12:00:00`. The `.getTimezoneOffset()` method is called on the date object, and the resulting time zone offset value is stored in the `timezoneOffset` variable. The output will be the time zone offset in minutes for the given date and time. The output can vary depending on the user's location and system settings.

Note that the returned value of .`getTimezoneOffset()` is the opposite sign of the actual time zone offset. For example, if the local time zone is `5` hours behind UTC, the method will return a positive value of `300`. Similarly, if the local time zone is `5` hours ahead of UTC, the method will return a negative value of `-300`.

```js
const date = new Date('2023-06-28T12:00:00');
const timezoneOffset = date.getTimezoneOffset();

console.log(timezoneOffset);
```
