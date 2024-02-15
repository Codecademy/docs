---
Title: 'Switch'
Description: 'A switch statement provides a means of checking an expression against various case statements.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Switch'
  - 'Conditionals'
  - 'Control Flow'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A **`switch`** statement provides a means of checking an expression against various `case` statements. If there is a match, the code within starts to execute. The `break` keyword can be used to terminate a case.

There's also an optional `default` statement marking code that executes if none of the `case` statements are true.

## Syntax

A `switch` statement looks like:

```pseudo
switch (expression) {
  case x:
    // Code block
    break;
  case y:
    // Code block
    break;
  default:
    // Code block
}
```

- The `switch` keyword initiates the statement and is followed by `()`, which contains the value that each case will compare. In the example, the value or expression of the switch statement is `grade`.
- Inside the block, `{}`, there are multiple cases.
- The `case` keyword checks if the expression matches the specified value that comes after it. The value following the first case is `9`. If the value of grade is equal to `9`, then the code that follows the `:` would run.
- The `break` keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block.
- At the end of each switch statement, there is a `default` statement. If none of the cases are `true`, then the code in the `default` statement will run. It’s essentially the `else` part in an `if`/`else if`/`else` statement.

In the code above, suppose grade is equal to `10`, then the output would be “Sophomore”.

> **Note:** Without the `break` keyword at the end of each case, the program would execute the code for the first matching case and _all_ subsequent cases, including the `default` code. This behavior is different from `if`/`else` conditional statements which execute only one block of code.

## Example

```java
int rating = 3;

switch (rating) {
  case 5:
    System.out.println("Exceptional");
    break;
  case 4:
    System.out.println("Good");
    break;
  case 3:
    System.out.println("Fair");
    break;
  default:
    System.out.println("Poor");
    break;
}
```
