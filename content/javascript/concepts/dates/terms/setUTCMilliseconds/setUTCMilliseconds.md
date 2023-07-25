---
Title: '.setUTCMilliseconds()'
Description: 'Sets the milliseconds value of a date object based on Coordinated Universal Time (UTC).'
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

The **`.setUTCMilliseconds()`** method sets the milliseconds value of a `Date` object according to Coordinated Universal Time(UTC) and returns the updated `Date` object.

## Syntax

```pseudo
myDate.setUTCMilliseconds(millisecondsValue);
```

The `.setUTCMilliseconds()` method takes a single parameter, representing the numeric value of the milliseconds.

> **Note**: It's important to note that the setUTCMilliseconds() method modifies the Date object in place. It returns the number of milliseconds since January 1, 1970, but it's typically not necessary to use the return value unless it's specifically needed for calculations.

## Example

In this example, we created a `Date` object representing January 1, 2023, at 12:34:56 UTC. We then retrieved the current milliseconds component in UTC and set a new value of 2000 milliseconds. The result is a new Date object with the modified milliseconds while keeping the other components (year, month, day, hour, minute, and second) the same

```javascript
// Create a Date object for a specific date (January 1, 2023, at 12:34:56 UTC)
const date = new Date(Date.UTC(2023, 0, 1, 12, 34, 56));

// Get the current milliseconds in UTC
const currentUTCMilliseconds = date.getUTCMilliseconds();

// Set a new value for milliseconds (e.g., 2000 milliseconds)
const newUTCMilliseconds = 2000;

// Create a new Date object with the  date and modified UTC milliseconds
const newDateWithModifiedMilliseconds = new Date(date);
newDateWithModifiedMilliseconds.setUTCMilliseconds(newUTCMilliseconds);

console.log('Date:', date.toUTCString());
console.log('Current UTC Milliseconds:', currentUTCMilliseconds);
console.log(
  'Modified Date with UTC Milliseconds:',
  newDateWithModifiedMilliseconds.toUTCString()
);
```
