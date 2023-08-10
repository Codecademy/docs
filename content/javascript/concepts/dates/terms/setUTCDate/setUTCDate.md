---
Title: '.setUTCDate()'
Description: 'Changes the day of a Date object in Coordinated Universal Time (UTC).'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
  - 'Time'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setUTCDate()`** method changes the day of a `Date` object in Coordinated Universal Time (UTC).

## Syntax

```pseudo
myDate.setUTCDate(day)
```

The `.setUTCDate()` method receives a `day` argument representing a number between 1 to 31.

## Example

In this example, `.setUTCDate()` is used to modify the day of `myDate` to 10.

```js
var myDate = new Date('Jun 26, 2023 18:10:40');
myDate.setUTCDate(10);

console.log(myDate.toString());
```

Output:

```shell
Tue Jun 10 2023 18:10:40 GMT+0000 (Coordinated Universal Time)
```
