---
Title: '.getUTCMinutes()'
Description: 'Returns the minutes of the provided date in universal time.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.getUTCMinutes()`** method returns the minutes for the date provided according to Coordinated Universal Time (UTC).

## Syntax

```pseudo
myDate.getUTCMinutes()
```

The `.getUTCMinutes()` method returns the minutes as an integer between `0` and `59` for the provided date, `myDate`, according to UTC time.

## Example

The following example uses the `.getUTCMinutes()` method to get the minutes of `2023-06-13T16:27:00.175Z` and logs the result to the console:

```js
const myDate = new Date('2023-06-13T16:27:00.175Z');
const minutes = myDate.getUTCMinutes();
console.log(minutes);
```

This outputs the following:

```shell
27
```
