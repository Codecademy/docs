---
Title: 'toDateString()'
Description: 'Returns a string representing the date portion of a Date instance' 
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

When applied to a Date object, **`toDateString()`** retrieves the date portion of the object's value, and returns a string representation of this date in a locale-specific format.

## Syntax

```pseudo
dateObject.toDateString()
```

## Example

In this example, a new instance of the date object is created and stored in the variable, `date`. The toDateString() method is then called on `date`, and the string returned is stored in `dateString` and printed out on the console:

```js
const date = new Date("December 5, 2023 8:53")
let  dateString= date.toDateString();
console.log(dateString)
```
The above example will give the following output:

```shell
Tue Dec 05 2023
```

## Codebyte Example

```codebyte/js
const today = new Date();
let  todayString= today.toDateString();
console.log(todayString)
```

