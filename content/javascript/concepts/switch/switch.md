---
Title: 'Switch'
Description: 'Evaluates an expression and allows different blocks of code to execute depending on the result of that expression.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Comparison'
  - 'Control Flow'
  - 'Switch'
  - 'Values'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

In JavaScript, the **`switch`** statement evaluates an expression and allows different blocks of code to execute depending on the result of that expression. It contains any number of `case` clauses marking code to execute based on values returned by the expression, and an optional `default` statement marking code that executes if none of the `case` clauses are `true`.

The code after a matching `case` clause will keep executing until it encounters a `break` statement, a `return` statement, or the end of the `switch` block.

This means that if `break` is omitted from the end of a `case` block, the subsequent `case` blocks and/or the `default` block will be executed regardless of the value of the original expression. This behavior is known as the _fall-through behavior_.

## Syntax

```pseudo
switch (expr) {
  case value1:
    // Statements to be executed if 'expr' matches 'value1'
    break;
  case value2:
    // Statements to be executed if 'expr' matches 'value2'
    break;
  case value3:
    // Statements to be executed if 'expr' matches 'value3'
    break;
  default:
    // Statements to be executed if none of these cases match
}
```

In this syntax, `expr` refers to the expression to be evaluated.

## Example 1: Basic Usage of `switch`

This example uses the `switch` statement to check if the given number is even or odd:

```js
let num = 3;

switch (num % 2) {
  case 0:
    console.log('The number is even.');
    break;
  case 1:
    console.log('The number is odd.');
    break;
  default:
    console.log('The input is not a number.');
}
```

Here is the output:

```shell
The number is odd.
```

## Example 2: Grouping Cases in `switch`

This example groups multiple `case` clauses in the `switch` statement to determine if the given fruit is Apple, Banana, or Orange:

```js
let fruit = 'Apple';

switch (fruit) {
  case 'Apple':
  case 'Banana':
  case 'Orange':
    console.log('We have this fruit in stock.');
    break;
  default:
    console.log("We don't have this fruit in stock.");
}
```

Here is the output:

```shell
We have this fruit in stock.
```

This example uses fall-through to group multiple case labels that execute the same block of code.

## Codebyte Example: Using `switch` Without `break`

This codebyte example uses the `switch` statement without the `break` statement to find out the grade of a student based on the score obtained:

```codebyte/javascript
let score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
  case score >= 80:
    console.log("Grade: B");
  case score >= 70:
    console.log("Grade: C");
  default:
    console.log("Grade: F");
}
```

In this example:

- `switch(true)` is used to handle range-based conditions, mimicking [`if-else`](https://www.codecademy.com/resources/docs/javascript/conditionals) chains.
- Since no `break` statements are used, all the statements that come after the matching case will be executed regardless of the value of the original expression.

## `switch` vs. `if-else`

| Feature                  | `switch` Statement                                    | `if-else` Statement                                     |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------- |
| Use Case                 | Best for comparing a single value to multiple options | Best for complex, range-based, or varied conditions     |
| Syntax Simplicity        | Cleaner with many fixed values                        | Becomes messy with many conditions                      |
| Expression Type          | Strict equality (`===`)                               | Supports any boolean expression                         |
| Range/Logical Conditions | Not suitable for range or logical conditions directly | Ideal for ranges and complex conditions                 |
| Fall-Through Behavior    | Can fall through without `break`                      | No fall-through; each condition is evaluated separately |
| Performance              | Slightly faster with many static cases                | Slightly slower due to multiple evaluations             |
| Default Behavior         | Uses `default`                                        | Uses `else`                                             |
| Readability              | More readable with many discrete values               | More readable with varied or complex logic              |

## Frequently Asked Questions

### 1. Is `switch` faster than `if-else` in JavaScript?

In most real-world scenarios, the performance difference is negligible. However, for many discrete values, `switch` can be slightly more optimized than multiple `if-else` statements.

### 2. Can we write duplicate cases in a `switch` statement?

No, duplicate case values are not allowed in a `switch` statement. If you do so, only the first matching case will be executed, and the others will be ignored or may cause unintended behavior.

### 3. Which data type cannot be used in a `switch` statement?

You cannot use complex data types like objects or arrays reliably in a `switch` statement, because comparisons use strict equality (`===`), which doesn't work as expected for non-primitive types.
