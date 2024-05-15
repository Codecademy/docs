---
Title: 'Switch'
Description: 'The switch statement evaluates an expression and allows different blocks of code to execute depending on the result of that expression. It contains any number of case clauses marking code to execute based on values returned by the expression, and an optional default statement marking code that executes if none of the case clauses are true. The code following a matching case clause will execute until it encounters a break statement, a return statement, or the end of the switch block. This means that if a break is omitted at the end of one case block, subsequent case blocks and/or the default block will be executed regardless of the value of the original expression. javascript switch (expression) { case value1: // Statements executed when expression = value1'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Switch'
  - 'Control Flow'
  - 'Comparison'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The `switch` statement evaluates an expression and allows different blocks of code to execute depending on the result of that expression. It contains any number of `case` clauses marking code to execute based on values returned by the expression, and an optional `default` statement marking code that executes if none of the `case` clauses are true.

The code following a matching `case` clause will execute until it encounters a `break` statement, a `return` statement, or the end of the `switch` block.

This means that if a `break` is omitted at the end of one `case` block, subsequent `case` blocks and/or the `default` block will be executed regardless of the value of the original expression.

## Syntax

```javascript
switch (expression) {
  case value1:
    // Statements executed when expression = value1
    break;
  case value2:
    // Statements executed when expression = value2
    break;
  case value3:
    // Statements executed when expression = value3
    break;
  default:
  // Statements executed when expression not equal to value1, value2 or value3
}
```

With `break` statements omitted:

```javascript
switch (expression) {
  case value1:
  // Statements executed when expression = value1
  case value2:
  // Statements executed when expression = value2 or value1
  case value3:
  // Statements executed when expression = value3, value2 or value1
  default:
  // Statements always executed
}
```

## Example

Determine whether a `rating` is a 5, 4, 3, or something else:

```js
switch (rating) {
  case 5:
    console.log('Excellent 👏');
    break;
  case 4:
    console.log('Good 👍');
    break;
  case 3:
    console.log('Fair 👌');
    break;
  default:
    console.log('Poor 👎');
}
```

- If `rating` is 5, print `"Excellent 👏"`.
- If `rating` is 4, print `"Good 👍"`.
- If `rating` is 3, print `"Fair 👌"`.
- Else, print `"Poor 👎"`.

## Codebyte Example

Here, an expression is used to find whether a number is even, odd, or not a number:

```codebyte/js
var test = 3;

switch (test % 2) {
  case 0:
    console.log("Test is even.");
    break;
  case 1:
    console.log("Test is odd.");
    break;
  default:
    console.log("Test is not a number.");
}
```
