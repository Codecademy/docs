---
Title: '.setDate()'
Description: 'Changes the day of the month according to local time.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'intro-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setDate()`** method changes the day of the month according to local time.

## Syntax

```pseudo
myDate.setDate()
```

The `.setDate()` method changes the day of the month of a provided date according to local time.

## Example

In the example below, the `myDate` variable takes the provided date and then the `.setDate()` method is applied to return a modified date.

```js
const myDate = new Date('2023-01-01');
myDate.setDate(24);

console.log(myDate.getDate());
```

This results in the following output:

```shell
24
```
