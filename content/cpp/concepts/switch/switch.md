---
Title: 'Switch'
Description: 'A switch statement provides a means of checking an expression against various case statements.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Switch'
  - 'Conditionals'
  - 'Control Flow'
  - 'Comparison'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **`switch`** statement provides a means of checking an expression against various `case` statements. If there is a match, the code within starts to execute. The `break` keyword can be used to terminate a case.

There's also an optional `default` statement marking code that executes if none of the `case` statements are true.

## Syntax

A `switch` statement looks like:

```cpp
switch (grade) {
  case 9:
    std::cout << "Freshman\n";
    break;
  case 10:
    std::cout << "Sophomore\n";
    break;
  case 11:
    std::cout << "Junior\n";
    break;
  case 12:
    std::cout << "Senior\n";
    break;
  default:
    std::cout << "Invalid\n";
    break;
}
```

- The `switch` keyword initiates the statement and is followed by `()`, which contains the value that each case will compare. In the example, the value or expression of the switch statement is `grade`. One restriction on this expression is that it must evaluate to an integral type (`int`, `char`, `short`, `long`, `long long`, or `enum`).
- Inside the block, `{}`, there are multiple cases.
- The `case` keyword checks if the expression matches the specified value that comes after it. The value following the first case is `9`. If the value of grade is equal to `9`, then the code that follows the `:` would run.
- The `break` keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block.
- At the end of each switch statement, there is a `default` statement. If none of the cases are `true`, then the code in the `default` statement will run.

In the code above, suppose grade is equal to `10`, then the output would be “Sophomore”.

> **Note:** Without the `break` keyword at the end of each case, the program would execute the code for the first matching case and _all_ subsequent cases, including the `default` code. This behavior is different from `if`/`else` conditional statements which execute only one block of code.

## Codebyte Example

```codebyte/cpp
#include <iostream>

int main() {
  int rating = 3;

  switch (rating) {
    case 5:
      std::cout << "Exceptional";
      break;
    case 4:
      std::cout << "Good";
      break;
    case 3:
      std::cout << "Fair";
      break;
    default:
      std::cout << "Poor";
      break;
  }
}
```
