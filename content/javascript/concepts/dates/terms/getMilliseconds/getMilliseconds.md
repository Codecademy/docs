---
Title: '.getMilliseconds()'
Description: 'Returns the milliseconds of a date according to the local time.'
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

The **`.getMilliseconds()`** method returns the milliseconds of a `Date` object according to the local time.

## Syntax

```pseudo
myDate.getMilliseconds();
```

The return value of `.getMilliseconds()` is an integer number between `0` and `999`, representing the milliseconds of a date according to the local time.

## Example

The code below determines if the given value is equivalent to half a second, or not:

```js
const today = new Date('June 10, 2023 15:50:45:500');

if (today.getMilliseconds() === 500) {
  console.log('It is half a second.');
} else {
  console.log('It is not half a second.');
}
```

This results in the following output:

```shell
It is half a second.
```

## Codebyte Example

In the following example, `currentDateTime` is defined to store the current date and time. The `.getMilliseconds()` method is used to extract the total milliseconds and both values are printed to the console.

```codebyte/javascript
const currentDateTime = new Date();
const milliseconds = currentDateTime.getMilliseconds();

console.log(`Current Date and Time: ${currentDateTime}\n`);
console.log("Number of milliseconds: " + milliseconds);
```
