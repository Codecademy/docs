---
Title: 'Recursion'
Description: 'Recursion is a technique where a function calls itself to solve smaller instances of the same problem.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Loops'
  - 'Recursion'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Recursion** is a technique where a function calls itself to solve smaller instances of the same problem until a specific condition called the base case is met. It’s commonly used when a task can be broken down into repeated sub-tasks.

A recursive function must always have two parts:

- **Base case:** Defines when the recursion should stop to prevent infinite calls.
- **Recursive call:** The function calls itself to continue solving the smaller problem until the base case is reached.

If the base case is missing, the function will keep calling itself indefinitely, causing a stack overflow error.

## Syntax

```pseudo
function recursiveFunction() {
  // Code block to execute
  recursiveFunction(); // Recursive call
}
```

## Example

In this example, the function prints numbers from 1 to 10 by calling itself until a condition is met:

```js
let count = 0;

function countToTen() {
  if (count < 10) {
    count = count + 1;
    console.log(count);
    countToTen(); // Recursive call
  }
}

countToTen();
```

The output would be:

```shell
1
2
3
4
5
6
7
8
9
10
```

Here’s what happens step by step:

- A variable `count` is initialized outside the function.
- The function checks if `count` is less than 10.
- If true, it increments `count`, prints it, and calls itself again.
- When `count` reaches 10, the base case condition fails, and recursion stops.

This process is similar to how loops work, but recursion uses function calls instead of loop structures.

## Codebyte Example

In this example, the function repeatedly calls itself to print numbers from 1 to 10, stopping once the base case condition (`count < 10`) is no longer true:

```codebyte/javascript
let count = 0;

function countToTen() {
  if (count < 10) {
    count++;
    console.log(count);
    countToTen();
  }
}

countToTen();
```
