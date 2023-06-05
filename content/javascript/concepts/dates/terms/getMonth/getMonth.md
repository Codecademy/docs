---
Title: '.getMonth()'
Description: 'Called from an instance of the Date class, will return the month of the year.'
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

Called from an instance of the `Date` class, will return the month of the year.

## Syntax

```js
myDate.getMonth();
```

The return value of `getMonth()` will only be an integer number between `0` and `11`, meaning the month of the year:

- `0` represents January
- `1` represents February
- `2` represents March
- ...
- `10` represents November
- `11` represents December

## Example

To determine if it is June or not:

```js
const today = new Date('June 25, 2021 13:41:30');

if (today.getMonth() === 5) {
  console.log('Time flies, it is now June.');
} else {
  console.log('It is not 10 in the morning now.');
}

// Output: Time flies, it is now June.
```

## Codebyte Example

The example below defines a new `Date` object `dateTimeNow`, an array `months` containing the names of the calendar months, and stores the result of the `getMonth()` method in a new variable `month`. Finally, the current date\time, the current month, and the months remaining in the current year are logged to the console.

```codebyte/javascript
let dateTimeNow = new Date();
let months =
   ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
let month = dateTimeNow.getMonth(); // Uses 0-based indexing; January = 0

console.log(`Date\\Time Now: ${dateTimeNow}\n`);
console.log(`Current month: ${months[month]}`);
console.log(`Months remaining in the current year: ${11 - month}`);
```
