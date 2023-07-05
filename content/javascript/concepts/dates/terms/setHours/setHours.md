---
Title: '.setHours()'
Description: 'Changes the hours for a specified date according to local time.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'intro-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setHours()`** method sets the hours for a specified date according to local time. It also can set minutes, seconds and milliseconds.

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

