---
Title: ".getMonth()"
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

Called from an instance of the `Date` class, will return the month of the year.

## Syntax

```js
myDate.getMonth();
```

The return value of `getMonth()` will only be an integer number between `0` and `11`, meaning the month of the year:

- `0` represents January
- `1` represents February
- `2` represents March
- and so on.

## Example

To determine if it is June or not:

```js
const today = new Date("June 25, 2021 13:41:30");

if (today.getMonth() === 5) {
  console.log("Time flies, it is now June.");
} else {
  console.log("It is not 10 in the morning now.");
}

// Output: Time flies, it is now June.
```
