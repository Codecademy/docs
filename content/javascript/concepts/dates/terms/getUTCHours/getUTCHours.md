---
Title: '.getUTCHours()'
Description: 'Returns the hours of a provided date according to universal time.'
Subjects:
  - 'Web Development'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.getUTCHours()`** returns the hours for the provided date according to universal time.

## Syntax

```pseudo
myDate.getUTCHours()
```

The `.getUTCHours()` method returns hours as an integer between `0`-`23` (midnight will return `0`) for the provided date `myDate`.

## Example

In the example below, the variable `myDate` stores the hours returned from a new `Date` object and logs the value to the console.

```js
const myDate = new Date('1 January 2023 11:20 GMT+900');
console.log(myDate.getUTCHours());
```

Returns the following to the console:

```shell
2
```

## Codebyte Example

In the following example, variables `estDate` and `pstDate` are defined to store a new `Date` object in Eastern Time and Pacific Time respectively. The method `.getUTCHours()` is then used to print the hours of the dates according to universal time. You can just run this example in the Codebyte to test the results. 

```codebyte/javascript
const estDate = new Date('January 2, 2023, 4:00 GMT -500');
const pstDate = new Date('January 2, 2023, 23:00 GMT -800');

console.log(estDate.getUTCHours());
// expected output: 9
console.log(pstDate.getUTCHours());
// expected output: 7
```
