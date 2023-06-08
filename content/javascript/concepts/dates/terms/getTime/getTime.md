---
Title: '.getTime()' 
Description: 'Returns the number of milliseconds since 1st January 1970.' 
Subjects: 
  - 'Web Development'
Tags: 
  - 'Date'
  - 'Methods'
CatalogContent: 
  - 'path/web-development'
  - 'introduction-to-javascript'
---

The **`getTime()`** method returns the number of milliseconds since the 1st of January 1970.

## Syntax

```js
myDate.getTime()
```

The returned value from `getTime()` is an number value showing the number of milliseconds since the 1st January 1970.

## Example

In the example the variable `today` stores the number of milliseconds from 1/1/1970 to the current time created using by the `getTime()` method on a new `Date` and logs the result to the console.

```js
const today = new Date().getTime()
console.log(today)
```
