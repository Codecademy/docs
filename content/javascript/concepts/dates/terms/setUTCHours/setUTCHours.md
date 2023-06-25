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

The **`.setUTCHours()`** method sets the hour value of a `Date` object according to [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) and returns the updated `Date` object.

Optionally, you can use the method to also set the date's minute, second, and millisecond UTC values. These are the valid number ranges for the time units:

* **Hours**: _0_ to _23_
* **Minutes**: _0_ to _59_
* **Seconds**: _0_ to _59_
* **Milliseconds**: _0_ to _999_

**Note**: You can only set the object's second and millisecond values when the preceding time unit is defined in the method call. For example, if you want to use the method to set a `Date` object's millisecond value, you must also set its minute and second values.

## Syntax

```pseudo
myDate.setUTCHours(hoursValue);
```

The `.setUTCHours()` method is called on the `myDate` object with an input argument `hoursValue` that passes the new hour value.

## Examples

This example sets the hour value of the `eventHour` object to `14`.

```javascript
const eventHour = new Date();
eventHour.setUTCHours(14);

console.log(eventHour);
console.log(eventHour.getUTCHours());
```

The example would output something similar to this:

```shell
2023-06-25T14:36:58.398Z
14
```

## Codebyte Example

This code example sets the hour and minute values of `eventHour` to `14` and `30` respectively. The values are then logged to the console.

```codebyte/javascript
const eventHour = new Date();
eventHour.setUTCHours(14, 30);

console.log(`Hours: ${eventHour.getUTCHours()}`);
console.log(`Minutes: ${eventHour.getUTCMinutes()}`);
```
