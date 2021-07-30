---
Title: ".toString()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Date"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Converts a Date object to a string.

## Syntax

```js
myDate.toString();
```

## Example 1

Print the Date object as a string:

```js
const currentDate = new Date("July 15, 2021 11:48:57");

console.log(typeof currentDate);
// Output: object

const currentDateString = currentDate.toString();

console.log(typeof currentDateString);
// Output: string

console.log(currentDateString);
// Output: Thu Jul 15 2021 11:48:57 GMT-0700 (Pacific Daylight Time)
// Note: Timezone may vary
```
