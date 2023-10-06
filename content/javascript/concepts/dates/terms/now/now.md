---
Title: '.now()'
Description: 'Returns the current time in milliseconds. The milliseconds count begins at 1970/01/01 at 00:00:00 UTC.'
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

Returns the current time in milliseconds. The milliseconds count begins at 1970/01/01 at 00:00:00 UTC.

## Syntax

```js
Date.now();
```

**Note:** Since `now()` is a static method of `Date`, it will always be used as `Date.now()`.

## Example 1

Print the current date in milliseconds:

```js
const time = Date.now();

console.log(`The current date in milliseconds is ${time}.`);
// Output: The current date in milliseconds is 1626374486136.
// Note: your output may vary
```

## Example 2

Calculate the number of months since 1970/01/01:

```js
const time = Date.now();

console.log(time);
// Output: 1626367528657

const minutes = 1000 * 60;
const hours = minutes * 60;
const days = hours * 24;
const months = days * 30;
const monthsSince1970 = Math.round(time / months);

console.log(monthsSince1970);
// Output: 627
// Note: your output may vary
```

## Codebyte Example

In this example, the function measures the time taken to execute a task. The code records the start time using `Date.now()` before the task and again after the task is complete.

```codebyte/javascript
const startTime = Date.now();

// Simulate a time-consuming task
for (let i = 0; i < 3000000000; i++) {
  // Perform some calculations
}

const endTime = Date.now();
const executionTime = endTime - startTime;

console.log(`Execution time: ${executionTime} milliseconds`);
```
