---
Title: 'Lists'
Description: 'White spaces are spaces and blank lines in programing'
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

White spaces are spaces (` `) or blanck lines. Whitespaces are used to format code to improve the readablity of code. Take this as an example.

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

The above code is hard to read since it has no gaps and it also does not have indentiont with spaces so people can not easyly see what is nested within what. But when whitespaces are used it is easy to read.

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
