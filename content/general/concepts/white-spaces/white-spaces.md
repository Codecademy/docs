---
Title: 'Lists'
Description: 'Whitespace is spaces and blank lines in programing.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Formatting'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Whitespace** is spaces or blank lines in programming. Whitespace is used to format code to improve its readability. 

## Why they are important

The below code is hard to read since it has no gaps and it also does not have indention with spaces so people can not easily see what is nested within what.

```js
function createRangeIterator(min = 0, max = Infinity, step = 1) {
let nextNum = min;
let numCount = 0;
const rangeIterator = {
next: function () {
let result;
if (nextNum < max) {
result = { value: nextNum, done: false };
nextNum += step;
numCount++;
return result;
}
return { value: numCount, done: true };
},
};
return rangeIterator;
}
```

When whitespace is used, it is easier to read.

```js
function createRangeIterator(min = 0, max = Infinity, step = 1) {
  let nextNum = min;
  let numCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextNum < max) {
        result = { value: nextNum, done: false };
        nextNum += step;
        numCount++;
        return result;
      }
      return { value: numCount, done: true };
    },
  };

  return rangeIterator;
}
```
