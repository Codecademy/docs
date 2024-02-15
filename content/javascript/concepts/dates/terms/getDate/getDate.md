---
Title: '.getDate()'
Description: 'Returns the day of the month.'
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

The **`.getDate()`** method returns the day of the month.

## Syntax

```shell
myDate.getDate();
```

The return value of `.getDate()` is an integer number between `1` and `31` representing the day of a month.

## Example

Suppose there is a need to find out if it is before the 10th of the current month:

```js
const today = new Date('June 22, 2021 10:41:30');

if (today.getDate() < 10) {
  console.log('It is before the 10th!');
} else {
  console.log('It is the 10th, or later!');
}

// Output: It is the 10th, or later!
```

## Codebyte Example

The example below is runnable, and assigns the variable `myDate` to a new given `Date`, then the result of the `.getDate()` method is stored in `payDay`. Finally, a `console.log` call prints this value to the screen:

```codebyte/javascript
const myDate = new Date("May 25, 2023 15:15:00");
const payDay = myDate.getDate();

console.log(payDay);
```
