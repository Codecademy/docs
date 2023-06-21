---
Title: '.setTime()'
Description: 'Sets the date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'paths/web-development'
  - 'introduction-to-javascript'
---

The **`.setTime()`** method sets the date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.

## Syntax

```pseudo
myDate.setTime(millisec)
```

The returned value from `.setTime()` is a value representing the number of milliseconds since the 1st of January 1970.

## Example

In the example below, the `myDate` is declared and then the `.setTime()` method is applied to return a modified time.

```js
const myDate = new Date();
myDate.setTime(1623918645000);

console.log(myDate.toString());
```

This results in the following output:

```shell
Sun Jun 17 2021 12:30:45 GMT+0000 (Coordinated Universal Time)
```
