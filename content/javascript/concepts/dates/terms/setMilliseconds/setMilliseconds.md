---
Title: '.setMilliseconds()'
Description: 'Sets the milliseconds of a date.'
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

The **`.setMilliseconds()`** method sets the milliseconds part of a `Date` object to the desired value. The `.setMilliseconds()` takes an integer argument ranging from 0 to 999, representing the new milliseconds value to be set. Only the milliseconds part of a date and time is modified.

## Syntax

```pseudo
dateObject.setMilliseconds(n)
```

Above code changes millisecond of `dateObject` to `n`, which is an integer between 1 and 999.

The return value of `.setMilliseconds()` is the new timestamp after updating milliseconds value of the original `Date` object in place. The `.setMilliseconds()` method returns the new timestamp value, which represents the number of milliseconds since January 1, 1970 00:00:00 UTC.

## Example

The code below sets the millisecond value of the given date to 421:

```js
const eventDate = new Date('1/1/2023');
console.log('Original date:', eventDate);

eventDate.setMilliseconds(421);
console.log('Modified date:', eventDate);
```

This example results in the following output:

```shell
Original date: 2023-01-01T00:00:00.000Z
Modified date: 2023-01-01T00:00:00.421Z
```

## Codebyte Example

The example below is runnable and demonstrates how to modify the millisecond value of a given date, `eventDate`, to be 112 milliseconds in the future.

```codebyte/javascript
const eventDate = new Date();
console.log("Original date:", eventDate);
eventDate.setMilliseconds(112);
console.log("Modified date:", eventDate);
```
