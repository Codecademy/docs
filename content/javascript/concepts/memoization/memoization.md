---
Title: 'Memoization'
Description: 'Memoization can be used to improve performance in JavaScript code.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Conceptual'
  - 'Dynamic Programming'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

In JavaScript, [memoization](https://www.codecademy.com/resources/docs/general/memoization) can be used to improve a program's performance.

This is ideal whenever the same calculations (with the same inputs and outputs) are known to take place. Memoization helps by saving, or caching, these results in computer memory for later use. It can be applied to many contexts, including:

- Making calls to recursive or pure functions where some calculations use the same inputs and return the same outputs.
- Fetching from the server with the same base API endpoints.

## Syntax

```pseudo
memo = []

function memoFunction(arg) {
  if(memo[arg]) {
    return memo[arg]
  } else {
    // Do this and update memo.
  }
}
```

Memoized results can be represented with [arrays](https://www.codecademy.com/resources/docs/javascript/arrays) or [objects](https://www.codecademy.com/resources/docs/javascript/objects). In a given function, if a previously calculated result exists in the `memo` array, it is returned. Otherwise, normal calculations take place and the `memo` array is updated.

## Example

In the example below, the `getSquare()` function accepts a parameter `n` and returns the square of it. With small inputs, this function takes little to no time to process. But as the inputs get larger, the timelapse becomes more noticeable. This point is further shown with the calls to `console.time()` and `console.timeEnd()`.

To address this, memoization is used in the `getSquareMemo()` function where such calculations are skipped if they have already been made and stored in `memo`.

```codebyte/javascript
function getSquare(n) {
  let result = n * n;
  return result;
}

let memo = [];

function getSquareMemo(n) {
  if (memo[n]) return memo[n];

  memo[n] = n * n;

  return memo[n];
}

console.log("With getSquare()\n----------------");
console.time("Time");
console.log(getSquare(30000));
console.timeEnd("Time");
console.log("\n");

console.log("With getSquareMemo()\n--------------------");
console.time("Time - First Call");
console.log(getSquareMemo(30000));
console.timeEnd("Time - First Call");

console.time("Time - Second Call");
console.log(getSquareMemo(30000));
console.timeEnd("Time - Second Call");
```
