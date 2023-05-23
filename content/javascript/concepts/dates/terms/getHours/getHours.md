---
Title: '.getHours()'
Description: 'Returns the hours of a date according to the local time.'
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

The **`.getHours()`** method returns the hours of a date according to the local time.

## Syntax

```js
myDate.getHours();
```

The return value of `getHours()` is an integer number between `0` and `23`, meaning the hour according to the local time.

## Example

To determine if it is 10 in the morning or not:

```js
const today = new Date('June 25, 2021 13:41:30');

if (today.getHours() === 10) {
  console.log('It is 10 in the morning now.');
} else {
  console.log('It is not 10 in the morning now.');
}

// Output: It is not 10 in the morning now.
```

## Codebyte Example

The example below is runnable, and first, it defines a variable called `currentTime` with a new `Date` of today's date and time, then uses the `getHours()` method to store the hour from that date into a variable called `currentHour`. Then `console.log` prints the number representing that hour of the day to the screen:

```codebyte/javascript
const currentTime = new Date();
const currentHour = currentTime.getHours();

console.log("The current hour of the day is: " + currentHour);
```
