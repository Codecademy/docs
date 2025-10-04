---
Title: 'Operators'
Description: 'C operators perform mathematical, logical, and bit-level operations on variables and values.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
  - 'Operators'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

C **operators** perform mathematical, logical, and bit-level operations on variables and values. They are symbols that tell the compiler to perform specific mathematical or logical operations.

The different types of operators in C include:

- Arithmetic operators
- Relational operators
- Logical operators
- Bitwise operators
- Assignment operators
- Misc operators

## C Arithmetic Operators

C has these basic arithmetic operators to perform common mathematical operations:

| Operator |      Name      | Description                                                 |
| :------: | :------------: | ----------------------------------------------------------- |
|   `+`    |    Addition    | `x + y` returns the sum of `x` and `y`                      |
|   `-`    |  Subtraction   | `x - y` returns the difference of `x` and `y`               |
|   `*`    | Multiplication | `x * y` returns the product of `x` and `y`                  |
|   `/`    |    Division    | `x / y` returns the quotient of `x` and `y`                 |
|   `%`    |     Modulo     | `x % y` returns the integer remainder of `x` divided by `y` |
|   `++`   |   Increment    | `x++` returns `x + 1`                                       |
|   `--`   |   Decrement    | `x--` returns `x - 1`                                       |

### C Arithmetic Operators Example

This example demonstrates the usage of arithmetic operators in C:

```c
#include <stdio.h>

int main() {
  int a = 10, b = 3;
  printf("Addition: %d\n", a + b);
  printf("Subtraction: %d\n", a - b);
  printf("Multiplication: %d\n", a * b);
  printf("Division: %d\n", a / b);
  printf("Modulo: %d\n", a % b);
  printf("Increment: %d\n", ++a);
  printf("Decrement: %d\n", --b);
  return 0;
}
```

Here is the output:

```shell
Addition: 13
Subtraction: 7
Multiplication: 30
Division: 3
Modulo: 1
Increment: 11
Decrement: 2
```

## C Relational Operators

C relational operators compare two values and return `true` or `false`:

| Operator |           Name           | Description                                                |
| :------: | :----------------------: | ---------------------------------------------------------- |
|   `==`   |          Equal           | `x == y` is `true` if `x` and `y` are equal.               |
|   `!=`   |        Not Equal         | `x != y` is `true` if `x` and `y` are not equal.           |
|   `<`    |        Less Than         | `x < y` is `true` if `x` is less than `y`.                 |
|   `>`    |       Greater Than       | `x > y` is `true` if `x` is greater than `y`.              |
|   `<=`   |  Less Than or Equal to   | `x <= y` is `true` if `x` is less than or equal to `y`.    |
|   `>=`   | Greater Than or Equal to | `x >= y` is `true` if `x` is greater than or equal to `y`. |

### C Relational Operators Example

This example demonstrates the usage of relational operators in C:

```c
#include <stdio.h>

int main() {
  int a = 10, b = 5;
  printf("a == b: %d\n", a == b);
  printf("a != b: %d\n", a != b);
  printf("a > b: %d\n", a > b);
  printf("a < b: %d\n", a < b);
  printf("a >= b: %d\n", a >= b);
  printf("a <= b: %d\n", a <= b);
  return 0;
}
```

Here is the output:

```shell
a == b: 0
a != b: 1
a > b: 1
a < b: 0
a >= b: 1
a <= b: 0
```

## C Logical Operators

C logical operators operate on Boolean values and return Boolean values:

| Operator | Name | Description                                                        |
| :------: | :--: | ------------------------------------------------------------------ |
|   `!`    | Not  | `!x` is `true` when `x` is `false` and `false` when `x` is `true`. |
|   `&&`   | And  | `x && y` is `true` only if `x` and `y` are both `true`.            |
|  `\|\|`  |  Or  | `x \|\| y` is `true` if either `x` or `y` is `true`.               |

### C Logical Operators Example

This example demonstrates the usage of logical operators in C:

```c
#include <stdio.h>

int main() {
  int a = 1, b = 0;
  printf("a && b: %d\n", a && b);
  printf("a || b: %d\n", a || b);
  printf("!a: %d\n", !a);
  return 0;
}
```

Here is the output:

```shell
a && b: 0
a || b: 1
!a: 0
```

## C Bitwise Operators

C bitwise operators manipulate individual bits in an integer:

| Operator |    Name     | Description                                                    |
| :------: | :---------: | -------------------------------------------------------------- |
|   `&`    |     And     | Result has bit set only where both operands have that bit set. |
|   `\|`   |     Or      | Result has bit set if either operand has that bit set.         |
|   `^`    |     Xor     | Result has bit set only if only one operand has that bit set.  |
|   `~`    |     Not     | Takes a single operand and inverts each bit in it.             |
|   `<<`   | Left shift  | `a << b` means `a`'s bits are shifted to the left `b` spaces.  |
|   `>>`   | Right shift | `a >> b` means `a`'s bits are shifted to the right `b` spaces. |

### C Bitwise Operators Example

This example demonstrates the usage of bitwise operators in C:

```c
#include <stdio.h>

int main() {
  int a = 5, b = 3;  // 5 = 0101, 3 = 0011
  printf("a & b: %d\n", a & b);
  printf("a | b: %d\n", a | b);
  printf("a ^ b: %d\n", a ^ b);
  printf("~a: %d\n", ~a);
  printf("a << 1: %d\n", a << 1);
  printf("a >> 1: %d\n", a >> 1);
  return 0;
}
```

Here is the output:

```shell
a & b: 1
a | b: 7
a ^ b: 6
~a: -6
a << 1: 10
a >> 1: 2
```

## C Assignment Operators

C assignment operators assign the value on the right to the variable on the left:

| Operator |           Name            | Description                                |
| :------: | :-----------------------: | ------------------------------------------ |
|   `=`    |        Assignment         | `a = 3` assigns value `3` to variable `a`. |
|   `+=`   |    Addition Assignment    | `a += 3` is short for `a = a + 3`.         |
|   `-=`   |  Subtraction Assignment   | `a -= 3` is short for `a = a - 3`.         |
|   `*=`   | Multiplication Assignment | `a *= 3` is short for `a = a * 3`.         |
|   `/=`   |    Division Assignment    | `a /= 3` is short for `a = a / 3`.         |
|   `%=`   |     Modulo Assignment     | `a %= 3` is short for `a = a % 3`.         |
|   `&=`   |      And Assignment       | `a &= 3` is short for `a = a & 3`.         |
|  `\|=`   |       Or Assignment       | `a \|= 3` is short for `a = a \| 3`.       |
|   `^=`   |      Xor Assignment       | `a ^= 3` is short for `a = a ^ 3`.         |
|  `<<=`   |   Left Shift Assignment   | `a <<= 3` is short for `a = a << 3`.       |
|  `>>=`   |  Right Shift Assignment   | `a >>= 3` is short for `a = a >> 3`.       |

### C Assignment Operators Example

This example demonstrates the usage of assignment operators in C:

```c
#include <stdio.h>

int main() {
  int a = 5;
  a += 3;  // a = a + 3
  printf("a += 3: %d\n", a);
  a -= 2;
  printf("a -= 2: %d\n", a);
  a *= 4;
  printf("a *= 4: %d\n", a);
  a /= 3;
  printf("a /= 3: %d\n", a);
  a %= 3;
  printf("a %%= 3: %d\n", a);
  return 0;
}
```

Here is the output:

```shell
a += 3: 8
a -= 2: 6
a *= 4: 24
a /= 3: 8
a %= 3: 2
```

## C Misc Operators

C misc operators don't fit into a particular category:

|  Operator  |         Name         | Description                                                                     |
| :--------: | :------------------: | ------------------------------------------------------------------------------- |
| `sizeof()` |   Sizeof Operator    | `sizeof(x)` returns the size of variable `x`.                                   |
|    `&`     |       Address        | `&x` returns the address of variable `x`.                                       |
|    `*`     |       Pointer        | `*x` returns a pointer to variable `x`. Not to be confused with multiplication. |
|    `?:`    | Conditional Operator | `expression?x:y` returns `x` when `expression` is `true`, `y` otherwise.        |

### C Misc Operators Example

This example demonstrates the usage of some of these operators in C:

```c
#include <stdio.h>

int main() {
  int a = 10;
  int *p = &a;

  printf("Address of a: %p\n", &a);
  printf("Value of a using pointer: %d\n", *p);

  int b = (a > 5) ? 100 : 200;
  printf("Ternary result: %d\n", b);

  return 0;
}
```

Here is the output:

```shell
Address of a: 0x7ffdcb92c540
Value of a using pointer: 10
Ternary result: 100
```

## Frequently Asked Questions

### 1. What is the difference between `==` and `=` in C?

- `=` is the assignment operator (e.g., `x = 5`; assigns value `5` to `x`).
- `==` is the equality operator used to compare two values (e.g., `x == y` checks if `x` equals `y`).

### 2. What is the difference between C `&&` and `&` operator?

- C `&&` is a logical AND operator: It returns `true` if both conditions are `true`.
- C `&` is a bitwise AND operator: It performs an AND operation bit-by-bit.

### 3. Can I use arithmetic operators on characters in C?

Yes. Characters in C are stored as ASCII values, so arithmetic operations like `'A' + 1` are valid and return `'B'`.
