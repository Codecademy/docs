---
Title: '.setMinutes()'
Description: 'Changes the minute value of the Date object according to local time.'
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

The **`.setMinutes()`** method changes the minute value of the Date object according to local time.

## Syntax

```javascript
myDate.setMinutes(minutesValue);
```

The **`.setMinutes()`** method is called on `Date` object `myDate` with an input argument `minutesValue` that contains the desired minute value.

## Example

```javascript
const eventDay = new Date();
eventDay.setMinutes(30);
```

In this example, a new `Date` object is instantiated and assigned to the `const` variable `eventDay`. `setMinutes()` is called on the `eventDay` `Date` object with a minute value of `30` minutes to change its current minute value. 

## Codebyte Example

The code example below sets the minute value of the `eventDay` Date object to `30`. The current minute value is then logged into the console.

```codebyte/javascript
const eventDay = new Date();
eventDay.setMinutes(30);

console.log(eventDay.getMinutes()); 
```
