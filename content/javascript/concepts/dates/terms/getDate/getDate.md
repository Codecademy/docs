---
Title: ".getDate()"
Description: "Called from an instance of the Date class, will return the date of the month. All return values will be integers between 1 and 31."
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



Called from an instance of the `Date` class, will return the date of the month. All return values will be integers between `1` and `31`.

## Syntax

```js
myDate.getDate();
```

## Example

Suppose there is a need to find out if it is before the 10th of the current month:

```js
const today = new Date("June 22, 2021 10:41:30");

if (today.getDate() < 10) {
  console.log("It is before the 10th!");
} else {
  console.log("It is the 10th, or later!");
}

// Output: It is the 10th, or later!
```
