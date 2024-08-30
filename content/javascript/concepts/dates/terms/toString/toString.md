---
Title: '.toString()'
Description: 'Converts a Date object to a string.'
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

Converts a Date object to a string.

## Syntax

```js
myDate.toString();
```

## Example 1

Print the Date object as a string:

```js
const currentDate = new Date('July 15, 2021 11:48:57');

console.log(typeof currentDate);
// Output: object

const currentDateString = currentDate.toString();

console.log(typeof currentDateString);
// Output: string

console.log(currentDateString);
// Output: Thu Jul 15 2021 11:48:57 GMT-0700 (Pacific Daylight Time)
// Note: Timezone may vary
```

## Codebyte Example

The following is runnable, and demonstrates the use of the `.toString()` method.

```codebyte/javascript
const exampleDate = new Date('May 29, 2023 20:29:31');
const exampleDateString = exampleDate.toString();

console.log(typeof exampleDate);
console.log(typeof exampleDateString);
```
