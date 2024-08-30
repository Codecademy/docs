---
Title: '.setFullYear()'
Description: 'Changes the year, month, and/or day according to local time.'
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

```pseudo
// Change year, month and date according to local time
myDate.setFullYear(yearValue, monthValue, dateValue)
```

The return value of `.setFullYear()` is the new timestamp obtained after changing the `Date` object in place. The function can be called with one or more parameters. If a parameter is `NaN` or the date is set to Invalid Date, `NaN` is returned.

## Example

To set the year and month for the date July, 1887 :

```js
const exampleDate = new Date('1/1/2023');
exampleDate.setFullYear(1887, 7);
console.log(exampleDate);
```

This example results in the following output:

```shell
1887-08-01T00:00:00.000Z
```

## Codebyte Example

The example below is runnable, and first, it defines `eventDate` with today's date and time, then the year value of `eventDate` is changed to that of 10 years before. Lastly, a `console.log` call prints the new value of `eventDate` to the screen:

```codebyte/javascript
const eventDate = new Date();

eventDate.setFullYear(eventDate.getFullYear()-10);

console.log(eventDate);
```
