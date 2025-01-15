# Ternary Operator

The **ternary operator** in [**C**](https://www.codecademy.com/resources/docs/c) is a shorthand way of writing an `if-else` statement. It allows you to choose between two values based on the result of a condition.

## Syntax

```c
condition ? value_if_true : value_if_false;
```

### Explanation of Syntax:

- **`condition`**: A [**boolean expression**](https://www.codecademy.com/resources/docs/general/data-types/boolean) that evaluates to `true` (non-zero) or `false` (zero).
- **`value_if_true`**: The value or expression that gets returned if the condition is true.
- **`value_if_false`**: The value or expression that gets returned if the condition is false.

## Example

```c
#include <stdio.h>

int main() {
    int a = 10, b = 20;

    // Using the ternary operator to find the maximum
    int max = (a > b) ? a : b;

    printf("The maximum value is: %d\n", max);
    return 0;
}
```

### How it Works:
1. The **`condition`** `(a > b)` is evaluated.
2. If `a > b` is true, the value of **`a`** is assigned to `max`.
3. If `a > b` is false, the value of **`b`** is assigned to `max`.

### Output:
```
The maximum value is: 20
```

## Key Points

- The **ternary operator** is often used for compactness but can reduce readability if overused.
- It’s equivalent to an `if-else` but as a single **expression**.
- It does not allow multiple statements for each branch; it only evaluates expressions. If you need to execute multiple lines of code, stick to `if-else`.

## When to Use

Use the **ternary operator** for simple conditions where readability isn’t compromised. For example:

```c
printf("Number is %s\n", (num % 2 == 0) ? "Even" : "Odd");
```

This checks if a number is even or odd and prints the result.
