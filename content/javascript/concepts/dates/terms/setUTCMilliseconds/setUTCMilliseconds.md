---
Title: '.setUTCMilliseconds()'
Description: 'Sets the milliseconds value of a date object based on Coordinated Universal Time (UTC).'
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

The **`.setUTCMilliseconds()`** method sets the milliseconds value of a `Date` object according to Coordinated Universal Time(UTC) and returns the updated `Date` object.

## Syntax

```pseudo
myDate.setUTCMilliseconds(millisecondsValue);
```

The `.setUTCMilliseconds()` method takes a single parameter, representing the numeric value of the `milliseconds`.

> **Note**: It's important to note that the `.setUTCMilliseconds()` method modifies the `Date` object in place. It returns the number of milliseconds since January 1, 1970, but it's typically not necessary to use the return value unless you specifically need it for calculations.

## Example

In this example, a new `Date` object representing the current date and time is declared. The `.setUTCMilliseconds()` is used to modify the milliseconds part of the date to `500`.

```javascript
// Create a new Date object with the current date and time
const date = new Date();

console.log('Original Date:', date.toISOString());

// Set the milliseconds value to 500
date.setUTCMilliseconds(500);

console.log('Updated Date:', date.toISOString());
```

This code will result in an output similar to:

```shell
Original Date: 2023-07-19T16:54:09.353Z
Updated Date: 2023-07-19T16:54:09.500Z
```
