---
Title: ".getDay()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Date"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Called from an instance of the `Date` class, will return the day of the week.

## Syntax

```js
myDate.getDay();
```

The return value of `getDay()` will only be an integer number between `0` and `6`, with `0` meaning Sunday, `1` meaning Monday, and so on.

## Example

To determine if it is Friday or not:

```js
const today = new Date("June 25, 2021 10:41:30");

if (today.getDay() === 5) {
  console.log("It is Friday, let's have a coffee later!");
} else {
  console.log("It is not Friday...");
}
// Output: It is Friday, let's have a coffee later!
```
