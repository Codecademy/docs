---
Title: 'Recursion'
Description: 'Recursion is a way of repeating tasks that rely on a condition to stop'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Recursion'
  - 'Functions'
  - 'Loops'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Recursion is a way to solve problems that involve repeating a task a certain number of times with a specific condition in mind. When that condition is met, the repetition stops. Very often, it's implemented in the form of recursive functions.

## Recursive function

The `recursive function` will repeat a task until a certain defined `condition` is met. Its main characteristic is that it calls itself a number of times to reiterate the task, considering this predetermined condition. When the condition is met, the function stops running, and the recursive function achieves its goal.

This `condition` is needed for the function to be done. Typically, this is done in the first step of the function. Being the condition missing, the function would run forever, causing an error or crash.

The `recursive call` is also needed to repeat the task until the condition is met. The function calls itself a number of times. Typically, this is done towards the end of the function.

## Syntax

```javascript
function recursiveFunction() {
  // Code block to be executed
  recursiveFunction()
}
```

## Example

```js
let count = 0; //step 1

function countToTen() {
  if (count < 10) { // step 2
    count = count+1; //step 3
    console.log(count); //step 3
    countToTen(); //step 4
  }
}
  
countToTen(); //step 5
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

Explanation:

-1) Set the variable to work with (out of the function).
-2) Decide what condition should be met.
-3) Increase the count by 1 in each function call and output the result.
-4) Repeat the function (recursive call) until the condition is met (in this case: count less than 10).
-5) Run or call the function.

This method of iterating can be compared to a Loop, another form of recursion. The main difference is that the Loop doesn't have to call itself; it's done using other algorithm structures. For detailed information and application, check the "Loops" entry.

## Codebyte

```codebyte/javascript
let count = 0; //step 1

function countToTen() {
  if (count < 10) { // step 2
    count = count+1; //step 3
    console.log(count); //step 3
    countToTen(); //step 4
  }
}