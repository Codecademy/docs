---
Title: '.valueOf()'
Description: 'Returns the difference in milliseconds between the specified date and January 1, 1970 00:00:00 UTC.'
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

Returns the difference in milliseconds between the specified date and January 1, 1970 00:00:00 UTC.

## Syntax

```js
myDate.valueOf();
```

## Example 1

Print the value of January, 1st, 1970 at 12:00:00 AM.

```js
const date = new Date(1999, 00, 01, 0, 0, 0, 0);

console.log(date);
// Output: Fri Jan 01 1999 00:00:00 GMT-0800 (Pacific Standard Time)
// Note: Timezone may vary

console.log(date.valueOf());
// Output: 915177600000
```

## Codebyte Example

The following is runnable, and demonstrates the use of the `.valueOf()` method.

```codebyte/javascript
const exampleDate = new Date('May 29, 2023 20:29:31');

console.log(exampleDate.valueOf());
```
