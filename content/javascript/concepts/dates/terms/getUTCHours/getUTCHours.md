---
Title: '.getUTCHours()' 
Description: 'Returns the hours of a provided date according to universal time.' 
Subjects: 
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.getUTCHours()`** returns the hours for the provided date according to universal time.

## Syntax

```pseudo
myDate.getUTCHours()
```

The `.getUTCHours()` method returns hours as an integer between 0-23 (midnight will return 0) for the provided date `myDate`.

## Example

In the example below, the variable `myDate` stores the hours returned from a new `Date` object and logs the value to the console. In this example the date provided to `myDate` is 1st January 2023 11.20 so the integer returned is `11`.

```pseudo
const myDate = new Date('1 January 2023 11:20')
console.log(myDate.getUTCHours())
```

Returns the following to the console

```shell
11
```
