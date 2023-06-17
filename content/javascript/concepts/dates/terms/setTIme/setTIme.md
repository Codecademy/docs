---
Title: '.setTime()'
Description: 'Sets date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'paths/web-development'
  - 'introduction-to-javascript'
---

The **`.setTime()`** method returns a number, representing the number of milliseconds between the date object and midnight January 1 1970.

## Syntax

```pseudo
myDate.setTime(millisec)
```

The returned value from `.getTime()` is a value representing the number of milliseconds since the 1st of January 1970.

## Example

In the example below, the `myDate` variable takes the provided Time and then the `.setTime()` method is applied to return a modified time.

```js
const myDate = new Date();
myDate.setTime(1332403882588);

console.log(myDate.getDate());
```

This results in the following output:

```shell
'Thu Mar 22 2012 13:41:22 GMT+0530 (India Standard Time)'
```
