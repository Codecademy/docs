---
Title: 'Unary operators'
Description: 'Perform operations on a single operand.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
  - 'Operators'
  - 'Unary'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

**Unary operators** in C operate on a single operand to perform various operations such as incrementing, decrementing, negating, or manipulating bits. They are frequently used for modifying values, checking conditions, and optimizing calculations in expressions.

## Syntax

```pseudo
operator operand;
```

- `operator`: A unary operator that performs an operation on a single operand.
- `operand`: The variable or value on which the operator acts.

> **Note:** In postfix notation, the operator is placed after the operand, and the original value is used before the operation takes effect.

## Types of Unary operators

### Increment (`++`)

Increases the value of the operand by 1. Can be used in prefix (`++x`) or postfix (`x++`) notation.

### Decrement (`--`)

Decreases the value of the operand by 1. Can be used in prefix (`--x`) or postfix (`x--`) notation.

### Unary Plus (`+`)

Indicates a positive value. Rarely used explicitly, as numbers are positive by default.

### Unary Minus (`-`)

Negates the value of the operand.

### Logical NOT (`!`)

Reverses the truth value of the operand. If the operand is nonzero, it returns `0`; otherwise, it returns `1`.

### Bitwise NOT (`~`)

Inverts all bits of the operand.

### Indirection (`*`)

Accesses the value stored at a memory address (used with pointers).

### Addressof (`&`)

Retrieves the memory address of a variable.

### Sizeof (`sizeof()`)

Determines the size (in bytes) of a variable or data type.

## Example

In this example, various unary operators are demonstrated, such as negation, increment, decrement, bitwise operations, and the sizeof operator to show their effects on integer values:

```c
#include <stdio.h>

int main() {
  int a = 5;
  int b = -a;    // Unary minus
  int c = !a;    // Logical NOT
  int d = ~a;    // Bitwise NOT
  int e = ++a;   // Pre-increment
  int f = a--;   // Post-decrement
  int size = sizeof(a); // Sizeof operator

  printf("Unary minus: %d\n", b);
  printf("Logical NOT: %d\n", c);
  printf("Bitwise NOT: %d\n", d);
  printf("Pre-increment: %d\n", e);
  printf("Post-decrement: %d\n", f);
  printf("Sizeof operator: %d\n", size);

  return 0;
}
```

The code produces the output as:

```shell
Unary minus: -5
Logical NOT: 0
Bitwise NOT: -6
Pre-increment: 6
Post-decrement: 6
Sizeof operator: 4
```
