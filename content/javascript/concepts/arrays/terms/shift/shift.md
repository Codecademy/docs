---
Title: ".shift()"
Description: "Removes and returns the first element of the array. All subsequent elements will shift down one place."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
CatalogContent:
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

Removes and returns the first element of the array. All subsequent elements will shift down one place.

## Syntax

```js
array.shift();
```

## Examples

To remove the element `'Monday'` from the `daysOfWeek` array:

```js
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const monday = daysOfWeek.shift();

console.log(monday);
// Output: Monday

console.log(daysOfWeek);
// Output: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```
