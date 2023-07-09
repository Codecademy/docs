---
Title: '.setMonth()'
Description: 'Changes the month and/or day of the month of a Date instance according to local time.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The Javascript date method **`.setMonth()`** changes the month and sometimes day of the month according to local time by modifying an instance of a `Date` object in place.

## Syntax

```js
date.setMonth(monthValue);
date.setMonth(monthValue, dateValue);
```

- `monthValue`: An integer from 0 to 11, which represents the month.
  - **Note:** 0 is for January, 1 for February, 2 for March, etc.
- `dateValue` (optional): An integer from 1 to 31, which represents the day of the month.

If either `monthValue` or `dateValue` is outside the expected range, the other date information in the `Date` object is updated to account for the underflow or overflow. For example, when given 14 as the parameter for a `monthValue`, the year is incremented by 1, and the month is set to 2.

If no value is provided for the `dateValue` parameter, the date value will not change unless there is an overflow. For example, calling `.setMonth(1)` to set the month to Feruary on a Date object that was `1/31/2023` will result in overflow, and the date will be set to `3/3/2023`. This is because February only has 28 days.

The return value of `.setMonth()` is the new timestamp given after changing the `Date` object in place. If a given parameter is `NaN`, `undefined`, or otherwise invalid, the date object will return `NaN` and if printed, will display `Invalid Date`.

## Example

This example shows multiple implementations of the `setMonth()` function. First, the month alone is changed. Then, the month and date are changed. Last, the month and date are changed, but with an end of the month transition, leading to date overflow. 

```js
const event = new Date('1/1/2023');

event.setMonth(2);

console.log(event.getMonth());
// Expected output: 2

console.log(event);
// Expected output: 2023-03-01T00:00:00.000Z

event.setMonth(2, 31);
console.log(event);
// Expected output: 2023-03-31T00:00:00.000Z

// Be careful when dealing with the last day of the month!
event.setMonth(3, 31);
console.log(event);
// Expected output: 2023-05-01T00:00:00.000Z
```

## Codebyte Example

To set the month of the `event` Date object to July:

```codebyte/javascript
const event = new Date('1/1/2023');

event.setMonth(6);

console.log(event);
```
