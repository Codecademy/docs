---
Title: 'toDateString()'
Description: 'returns a string representing the date portion of a Date instance' 
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

The **`toDateString()`** method of Date instances returns the date portion of a Date object as a string.

## Syntax
```pseudo
const d = new Date('January 1, 2000 00:00')
d.toDateString()
```

## Example
```js
const date = new Date("December 5, 2023 8:53")
let  dateString= date.toDateString();
console.log(dateString)
// Output: Tue Dec 05 2023
```

## Codebyte Example

```codebyte/js
const today = new Date();
let  todayString= today.toDateString();
console.log(todayString)
```

