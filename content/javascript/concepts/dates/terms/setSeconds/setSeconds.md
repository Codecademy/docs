---
Title: '.setSeconds()'
Description: 'Sets the seconds component of a date object to a specified value.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'paths/web-development'
  - 'introduction-to-javascript'
---

The **`.setSeconds()`** method sets the seconds component of a `Date` object to a specified value. It takes an integer value as its parameter, representing the new value for the seconds.

## Syntax

```pseudo
myDate.setSeconds(secondsValue)
```

The returned value from `.setSeconds()` modifies the original `Date` object, `myDate`, by setting the seconds to `secondsValue`.

## Example

In the example below, the `myDate` variable is declared and then the `.setSeconds()` method is applied to return a modified time.

```js
const myDate = new Date('August 29, 2022 23:15:30');
myDate.setSeconds(42);

console.log(myDate.toString());
```

This results in the following output:

```shell
Mon Aug 29 2022 23:15:42 GMT+0000
```
