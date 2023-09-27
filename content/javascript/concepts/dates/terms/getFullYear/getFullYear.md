---
Title: '.getFullYear()'
Description: 'Returns the four digit year for the given date.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.getFullYear()`** method returns a four digit year for the date according to local time.

## Syntax

```js
myDate.getFullYear();
```

The returned value of the `.getFullYear()` method is an integer representing the year for the provided date `myDate`.

## Codebyte Example

In the example below, the `year` variable stores the year returned from a new Date object and then logs it to the console.

```codebyte/javascript
const year = new Date().getFullYear()
console.log(year)
```
