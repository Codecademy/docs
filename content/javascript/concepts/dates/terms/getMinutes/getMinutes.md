---
Title: '.getMinutes()'
Description: 'Called from an instance of the Date class, will return the minutes according to the local time.'
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

Called from an instance of the `Date` class, will return the minutes according to the local time.

## Syntax

```js
myDate.getMinutes();
```

The return value of `getMinutes()` will only be an integer number between `0` and `59`, meaning the minutes according to the local time.

## Example

To determine if it has been 15 minutes:

```js
const today = new Date('June 25, 2021 13:15:00');

if (today.getMinutes() >= 15) {
  console.log('Hurry up, it has been 15 minutes!');
} else {
  console.log('Take your time, we still have time for it.');
}

// Output: Hurry up, it has been 15 minutes!
```
