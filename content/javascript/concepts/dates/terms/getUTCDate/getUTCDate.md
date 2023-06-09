---
Title: '.getUTCDate()' 
Description: 'Returns the day of the month for the provided date.' 
Subjects: 
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.getUTCDate()`** returns the day of the month for the provided date according to universal time.

## Syntax

```pseudo
myDate.getUTCDate()
```

The `.getUTCDate()` method returns the day of the month as an integer (1-31) for the provided date `myDate`.

## Example

In the example below, the variable `myDate` stores the day of the month returned from a new `Date` object and logs the value to the console. In this example the date provided to `myDate` is 1st March 2023 so the integer returned is `1`.

```pseudo
const myDate = new Date('2023-03-01')
console.log(myDate.getUTCDate())
```
