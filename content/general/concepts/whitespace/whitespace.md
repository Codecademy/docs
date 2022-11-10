---
Title: 'Whitespace'
Description: 'Whitespace uses horizontal and vertical space characters or blank lines to format code and improve readability.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Formatting'
  - 'Typography'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In programming, **whitespace** uses horizontal and vertical space characters or blank lines to format code and improve readability.

## Example

The code example below is hard to read since there is little to no whitespace. It also does not have indentation with spaces so people can not easily see what is nested within what.

<!-- prettier-ignore-start -->

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

<!-- prettier-ignore-end -->

When whitespace is used, the code is much more readable:

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
