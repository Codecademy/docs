---
Title: 'Ternary operator'
Description: 'Provides a concise way to write conditional expressions in C.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
  - 'Operators'
  - 'Ternary'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **ternary operator** in C, also known as the conditional operator (**`?:`**), provides a shorthand way to perform conditional assignments or expressions. It is an alternative to [`if-else`](https://www.codecademy.com/resources/docs/c/control-statements) statements and is primarily used to simplify code by reducing the number of lines required for simple condition-based decisions.

## Syntax

```pseudo
condition ? expression_if_true : expression_if_false;
```

- `condition`: A boolean expression that evaluates to either true or false.
- `expression_if_true`: The value or operation executed if the condition is true.
- `expression_if_false`: The value or operation executed if the condition is false.

## Example

In this example, the ternary operator is used to determine the maximum of two numbers by evaluating whether `a` is greater than `b`:

```c
#include <stdio.h>

int main() {
  int a = 10, b = 20;
  int max;
  max = (a > b) ? a : b;
  printf("The maximum value is: %d\n", max);
  return 0;
}
```

The code above produces the following output:

```shell
The maximum value is: 20
```
