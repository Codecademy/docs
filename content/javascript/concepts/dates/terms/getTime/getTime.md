---
Title: '.getTime()'
Description: 'Returns the number of milliseconds since the 1st of January 1970.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'paths/web-development'
  - 'introduction-to-javascript'
---

The **`.getTime()`** method returns the number of milliseconds since the 1st of January 1970.

## Syntax

```pseudo
myDate.getTime()
```

The returned value from `.getTime()` is a value representing the number of milliseconds since the 1st of January 1970.

## Example

In the example the variable `myDate` stores the number of milliseconds from 1/1/1970 to the current time created using by the `.getTime()` method on a new `Date` and logs the result to the console.

```js
const myDate = new Date('2023-01-01');
console.log(myDate.getTime());
```

This will yield:

```shell
1672531200000
```
