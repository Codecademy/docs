---
Title: '.toUTCString()'
Description: 'Converts a date object to a string, according to UTC.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.toUTCString()`** method is used to convert a given `Date` object’s content into a string according to the Coordinated Universal Time (UTC).

## Syntax

```pseudo
myDate.toUTCString();
```

## Example

Get the `Date` object as a string, according to UTC:

```js
const date = new Date('1 Aug 2023 08:54:00');

const utcDateString = date.toUTCString();

console.log(utcDateString);
```

This will result in the following code:

```shell
Tue, 01 Aug 2023 08:54:00 GMT
```
