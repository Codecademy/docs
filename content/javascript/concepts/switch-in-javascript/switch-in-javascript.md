---
Title: "Switch in Javascript" 
Subjects: 
  - "Web Development"
  - "Computer Science"
Tags: 
  - "Control Flow"
  - "Comparison"
Catalog Content: 
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/create-a-back-end-app-with-javascript"
---
The `switch` statement evaluates an expression and allows different blocks of code to execute depending on the result of that expression. The `switch` block contains any number of `case` statements marking code to execute based on values returned by the expression, and an optional `default` statement marking code that executes if none of the `case` statements are true.

The code following a matching `case` statement will execute until it encounters a `break` statement, a `return` statement, or the end of the `switch` block. This means that if a `break` is omitted at the end of one `case` block, subsequent `case` blocks and/or the `default` block will be executed regardless of the value of the original expression.

## Syntax

```javascript
switch (expression) {
  case value1:
    // statements executed when expression = value1
    break;
  case value2:
    // statements executed when expression = value2
    break;
  case value3:
    // statements executed when expression = value3
    break;
  default:
    // statements executed when expression not equal to value1, value2 or value3
}
```

With `break` statements omitted:

```javascript
switch (expression) {
  case value1:
    // statements executed when expression = value1
  case value2:
    // statements executed when expression = value2 or value1
  case value3:
    // statements executed when expression = value3, value2 or value1
  default:
    // statements always executed
}
```

## Example

```javascript
var test = 3; 

switch (test % 2) {
  case 0:
    console.log("test is even.");
    break;
  case 1:
    console.log("test is odd.");
    break;
  default:
    console.log("test is not a number.");
}
// Output: test is odd.
```
