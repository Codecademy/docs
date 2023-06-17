---
Title: '.setFullYear()'
Description: 'Changes the year, month, and/or day of month  according to local time.'
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

The **`.setFullYear()`** method changes the year, month, and/or day according to local time. The `.setFullYear()` method modifies a `Date` object in place, meaning it updates the year, month, and day values of the provided object. It also takes into account any overflow or underflow of the values. For example, if you set the month to 15, the year will be incremented accordingly.

## Syntax

```shell
// Change year according to local time
setFullYear(yearValue)
// Change year and month according to local time
setFullYear(yearValue, monthValue)
// Change year, month and date according to local time
setFullYear(yearValue, monthValue, dateValue)

```

The return value of `.setFullYear()` is the new timestamp obtained after changing the Date object in place. If a parameter is `NaN` or the date is set to Invalid Date, `NaN` is returned.

## Example

To set the year and month of a Date instance to July,1887 :

```js
const exampleDate = new Date();
exampleDate.setFullYear(1887,7);
console.log(exampleDate);
```

This example results in the following output:

```shell
Sun Aug 14 1887 18:21:27 GMT+0521 (India Standard Time)
```

## Codebyte Example

The example below is runnable, and first, it defines `eventDate` with today's date and time, then the year value of `eventDate` is changed to that of 10 years before. Lastly, a `console.log` call prints the new value of `eventDate` to the screen:

```codebyte/javascript
const eventDate = new Date();

event.setFullYear(eventDate.getFullYear()-10);

console.log(eventDate);

event.setFullYear(0);

console.log(event.getFullYear());
```
