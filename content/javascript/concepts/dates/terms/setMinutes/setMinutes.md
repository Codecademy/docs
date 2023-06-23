---
Title: '.setMinutes()'
Description: 'Changes the minute value of a date according to local time.'
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

The **`.setMinutes()`** method changes the minute value of a date according to local time.

## Syntax

```pseudo
myDate.setMinutes(minutesValue);
```

The `.setMinutes()` method is called on `Date` object `myDate` with an input argument `minutesValue` that contains the desired minute value.

## Example

The example below shows a basic implementation of the function in which the minutes of `eventDay` are changed from `20` to `30`.

```javascript
const eventDay = new Date('June 11, 2023 14:20:29');
eventDay.setMinutes(30);

const hoursMinutes = eventDay.getHours() + ':' + eventDay.getMinutes();

console.log(hoursMinutes);
```

The example above results in the following output:

```shell
14:30
```

## Codebyte Example

The code example below sets the minute value of `eventDay` to `30`. The current minute value is then logged to the console.

```codebyte/javascript
const eventDay = new Date();
eventDay.setMinutes(30);

console.log(eventDay.getMinutes());
```
