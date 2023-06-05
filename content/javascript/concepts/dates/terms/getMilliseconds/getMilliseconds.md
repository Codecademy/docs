---
Title: '.getMilliseconds()'
Description: 'Retrieves the milliseconds component from a given Date object.'
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

The **`.getMilliseconds()`** method is part of the `Date` object in JavaScript, used to extract the milliseconds component of a specified date and time.

## Syntax

The `.getMilliseconds()` method takes no parameters. To use it, you simply call the method on a `Date` object. Here is an example:

```js
dateObject.getMilliseconds();
```

## Example

In this code sample, we create a new `Date` object, then utilize the `.getMilliseconds()` method to print the current milliseconds component of the date and time to the console:

```js
const currentDate = new Date();
const milliseconds = currentDate.getMilliseconds();
console.log(`The current milliseconds component is: ${milliseconds}`);

// Output: The current milliseconds component is: 567
```

This will print a message like "The current milliseconds component is: 567" to the console. Remember that the value of milliseconds ranges from 0 to 999 in JavaScript's `Date` object.

## Codebyte Example

The example below is runnable, and first, it defines `currentTime` with today's date and time, then the result of the `.getMilliseconds()`method is saved in `currentMilliseconds`. Lastly, a `console.log` call prints the value to the screen:

```codebyte/javascript
const currentTime = new Date();
const currentMilliseconds = currentTime.getMilliseconds();

console.log("The current milliseconds component is: " + currentMilliseconds);
```
