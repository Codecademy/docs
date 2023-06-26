---
Title: '.getUTCSeconds()'
Description: 'Returns the seconds (0 to 59) of a date according to universal time.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-developer-career-path'
---

The **`getUTCSeconds()`** method returns the seconds (ranging from 0 to 59) of a specific date according to UTC (Coordinated Universal Time).

## Syntax

```pseudo
Date.getUTCSeconds()
```

A `Date` object is used for working with dates and times. The object provides a way to create, manipulate, and format dates in various formats.

A `Date` object can be created by declaring a new variable with the `new Date()` constructor.

## Example

The following example uses the `.getUTCSeconds()` method to get the seconds of `2023-06-06T10:30:04` and logs the result to the console:

```js
const date = new Date('2023-06-06T10:30:04');
const seconds = date.getUTCSeconds();

console.log(seconds);
```

This example results in the following output:

```shell
4
```

## Codebyte Example

The codebyte example below uses the `.getUTCSeconds()` method to get the current time in seconds and logs it to the console:

```codebyte/javascript
const today = new Date();
const today_seconds = today.getUTCSeconds();
console.log(today_seconds);
```
