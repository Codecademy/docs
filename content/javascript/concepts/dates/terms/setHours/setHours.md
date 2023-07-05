---
Title: '.setHours()'
Description: 'Changes the hours for a specified date according to local time.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'intro-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setHours()`** method sets the hours for a specified date according to local time. It also can set minutes, seconds and milliseconds.

## Syntax

```pseudo
myDate.setHours(hoursValue)
myDate.setHours(hoursValue, minutesValue)
myDate.setHours(hoursValue, minutesValue, secondsValue)
myDate.setHours(hoursValue, minutesValue, secondsValue, millisecondsValue)
```

The `.setHours()` method changes the hours, minutes, seconds and millisecons for this date according to local time.

## Parameters

`hoursValue` 
- ##### Required. 0 to 23 representing the hours.
`minutesValue`
- ##### Optional. 0 to 59 representing the minutes.
`secondsValue`
- ##### Optional. 0 to 59 representing the seconds. You must also specify `minutesValue`.
`millisecondsValue`
- ##### Optional. 0 to 999 representing the milliseconds. You must also specify `minutesValue` and `secondsValue`.

## Example

In the example below, the `myDate` variable takes the provided date and then the `.setDate()` method is applied to return a modified date.

```js
const myDate = new Date('2023-01-01');
myDate.setDate(24);

console.log(myDate.getDate());
```

This results in the following output:

```shell
24
```

