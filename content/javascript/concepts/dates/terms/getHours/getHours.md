---
Title: ".getHours()"
Description: "Called from an instance of the Date class, will return the hour according to the local time."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Date"
  - "Methods"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---



Called from an instance of the `Date` class, will return the hour according to the local time.

## Syntax

```js
myDate.getHours();
```

The return value of `getHours()` will only be an integer number between `0` and `23`, meaning the hour according to the local time.

## Example

To determine if it is 10 in the morning or not:

```js
const today = new Date("June 25, 2021 13:41:30");

if (today.getHours() === 10) {
  console.log("It is 10 in the morning now.");
} else {
  console.log("It is not 10 in the morning now.");
}

// Output: It is not 10 in the morning now.
```
