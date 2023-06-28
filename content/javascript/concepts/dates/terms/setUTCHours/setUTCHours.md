---
Title: '.setUTCHours()'
Description: 'Sets the hour value of a date object using UTC.'
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

The **`.setUTCHours()`** method sets the hour value of a `Date` object according to Coordinated Universal Time(UTC) and returns the updated `Date` object.

## Syntax

```pseudo
myDate.setUTCHours(hoursValue);
```

The `.setUTCHours()` method is called on the `myDate` object with an input argument `hoursValue` that passes the new hour value.

Optionally, the method can also set the date's minute, second, and millisecond UTC values. The valid number ranges for the time units are as follows:

- **Hours** (required): _0_ to _23_
- **Minutes** (optional): _0_ to _59_
- **Seconds** (optional): _0_ to _59_
- **Milliseconds** (optional): _0_ to _999_

> **Note**: The object's second and millisecond values can only be set when the preceding time unit is defined in the method call. For example, to set a `Date` object's millisecond value, the minute and second values must be set as well.

## Examples

This example sets the hour value of the `eventHour` object to `14`.

```javascript
const eventHour = new Date('2023-06-25T00:00:00');
eventHour.setUTCHours(14);

console.log(eventHour);
console.log(eventHour.getUTCHours());
```

The code above results in the following output:

```shell
2023-06-25T14:30:00.000Z
14
```

## Codebyte Example

This code example sets the hour and minute values of `eventHour` to `14` and `30` respectively. The values are then logged to the console.

```codebyte/javascript
const eventHour = new Date("2023-06-25T00:00:00");
eventHour.setUTCHours(14, 30);

console.log(`Hours: ${eventHour.getUTCHours()}`);
console.log(`Minutes: ${eventHour.getUTCMinutes()}`);
```
