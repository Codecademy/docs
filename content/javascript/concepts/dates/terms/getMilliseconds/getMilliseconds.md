---
Title: '.getMilliseconds()'
Description: 'Method of the Date object that returns the milliseconds of a date according to the local time.'
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

The **`.getMilliseconds()`** method of `Date` object returns the milliseconds of a date according to the local time.

## Syntax

```js
myDate.getMilliseconds();
```

The return value of `.getMilliseconds()` is an integer number between `0` and `999`, representing the milliseconds of a date according to the local time.

## Example

To determine if it is half a second or not:

```js
const today = new Date('June 10, 2023 15:50:45:500');

if (today.getMilliseconds() === 500) {
  console.log('It is half a second.');
} else {
  console.log('It is not half a second.');
}

// Output: It is half a second.
```

## Codebyte Example

In the following example, a new `Date` object `currentDateTime` is defined to store the current date and time. And `milliseconds` variable is declared to store the current milliseconds value using `.getMilliseconds()` method. Finally, `console.log` is used to print the values. Click on the **Run** button to see the output.

```codebyte/javascript
const currentDateTime = new Date();
const milliseconds = currentDateTime.getMilliseconds();

console.log(`Current Date and Time: ${currentDateTime}\n`);
console.log("Number of milliseconds: " + milliseconds);
```
