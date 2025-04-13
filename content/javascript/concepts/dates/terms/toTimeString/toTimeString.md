---
Title: '.toTimeString()'
Description: 'Returns the time portion of the given Date object.'
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

The **`.toTimeString()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) returns a [string](https://www.codecademy.com/resources/docs/javascript/strings) representing the time portion of the given `Date` [object](https://www.codecademy.com/resources/docs/javascript/objects) in the local timezone.

## Syntax

```pseudo
DateObject.toTimeString()
```

## Example

The following code creates a `Date` object called `newDate` and calls the `.toTimeString()` method to obtain the time portion from the `newDate` object:

```js
// A Date object with a random date
const newDate = new Date('March 8, 1990 12:45:00');

// Get the time string from the Date object
const timeString = newDate.toTimeString();

console.log('New Date:', newDate.toDateString());
console.log('Time String:', timeString);
```

The above code will result in the following output:

```shell
New Date: Thu Mar 08 1990
Time String: 12:45:00 GMT+0530 (India Standard Time)
```

> **Note:** The `.toTimeString()` method returns the time according to the local timezone. The output may vary according to the timezone.

## Codebyte Example

Following is a runnable codebyte example of `.toTimeString()` method:

```codebyte/js
// Edit the Date object for the current date and time
const currentDate = new Date();

const timeString = currentDate.toTimeString();

console.log('Current Date:', currentDate.toDateString());
console.log('Time String:', timeString);
```
