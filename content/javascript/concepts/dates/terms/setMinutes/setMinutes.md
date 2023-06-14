---
Title: '.setMinutes()'
Description: 'Changes the minute value of a date object according to local time.'
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

The **`.setMinutes()`** method changes the minute value of a date object according to local time.

## Syntax

```pseudo
myDate.setMinutes(minutesValue);
```

The `.setMinutes()` method is called on `Date` object `myDate` with an input argument `minutesValue` that contains the desired minute value.

## Example

In this example, a new `Date` object is instantiated with the value `June 11, 2023 14:20:29` and assigned to the `const` variable `eventDay`. `setMinutes()` is called on the `eventDay` `Date` object with a minute value of `30` minutes to change its current minute value from `20` to `30`. The current hours and minutes are concatenated and stored in the `hoursMinutes` variable, which is then logged in the console. 

```javascript
const eventDay = new Date("June 11, 2023 14:20:29");
eventDay.setMinutes(30);

const hoursMinutes = eventDay.getHours() + ":" + eventDay.getMinutes();

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
