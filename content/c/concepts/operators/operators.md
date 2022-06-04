---
Title: 'Operators'
Description: 'Operators are used to perform operations on variables and values.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

Operators are used to perform operations on variables and values. They are symbols that tell the compiler to perform specific mathematical or logical functions. The C language provides the following types of operators:

- Arithmetic Operators
- Relational Operators
- Logical Operators
- Bitwise Operators
- Assignment Operators
- Misc Operators

## Arithmetic Operators

C has the following basic arithmetic operators to perform common mathematical operations:

| Operator | Name           | Description                                                     |
| -------- | -------------- | --------------------------------------------------------------- |
| `+`      | Addition       | `x + y` returns the sum of `x` and `y`                          |
| `-`      | Subtraction    | `x - y` returns the difference of `x` and `y`                   |
| `*`      | Multiplication | `x * y` returns the product of `x` and `y`                      |
| `/`      | Division       | `x / y` returns the quotient of `x` and `y`                     |
| `%`      | Modulo         | `x % y` returns the integer remainder of `x` divided by `y`     |
| `++`     | Increment      | `x++` returns `x + 1`                                           |
| `--`     | Decrement      | `x--` returns `x - 1`                                           |

## Relational Operators

| Operator | Name                     | Description                                                                                                                                 |
| -------- | ------------------------ | -----------------------------------------------------------|
| `==`     | Equal                    | `x == y` is `true` if `x` and `y` are equal.               |
| `!=`     | Not Equal                | `x != y` is `true` if `x` and `y` are not equal.           |
| `<`      | Less Than                | `x < y` is `true` if `x` is less than `y`.                 |
| `>`      | Greater Than             | `x > y` is `true` if `x` is greater than `y`.              |
| `<=`     | Less Than or Equal to    | `x <= y` is `true` if `x` is less than or equal to `y`.    |
| `>=`     | Greater Than or Equal to | `x >= y` is `true` if `x` is greater than or equal to `y`. |

## Logical Operators

| Operator | Name | Description                                                         |
| -------- | ---- | ------------------------------------------------------------------- |
| `!`      | Not  | `!x` is `true` when `x` is `false` and `false` when `x` is `true`.  |
| `&&`     | And  | `x && y` is `true` only if `x` and `y` are both `true`.             |
| `\|\|`   | Or   | `x \|\| y` is `true` if either `x` or `y` is `true`.                |

## Bitwise Operators

The bitwise operators manipulate individual bits in an integer.

| Operator | Name        | Description                                                    |
| -------- | ----------- | ---------------------------------------------------------------|
| `&`      | And         | result has bit set only where both operands have that bit set. |
| `\|`     | Or          | result has bit set if either operand has that bit set.         |
| `^`      | Xor         | result has bit set only if only one operand has that bit set.  |
| `~`      | Not         | takes a single operand and inverts each bit in it.             |
| `<<`     | Left shift  | `a << b` means `a`'s bits are shifted to the left `b` spaces.  |
| `>>`     | Right shift | `a >> b` means `a`'s bits are shifted to the right `b` spaces. |

### Assignment Operators

| Operator | Name                      | Description                         |
| -------- | ------------------------- | ----------------------------------- |
| `+=`     | Addition Assignment       | `a += 3` is short for `a = a + 3`   |
| `-=`     | Subtraction Assignment    | `a -= 3` is short for `a = a - 3`   |
| `*=`     | Multiplication Assignment | `a *= 3` is short for `a = a * 3`   |
| `/=`     | Division Assignment       | `a /= 3` is short for `a = a / 3`   |
| `%=`     | Modulo Assignment         | `a %= 3` is short for `a = a % 3`   |
| `&=`     | And Assignment            | `a &= 3` is short for `a = a & 3`   |
| `\|=`    | Or Assignment             | `a \|= 3` is short for `a = a \| 3` |
| `^=`     | Xor Assignment            | `a ^= 3` is short for `a = a ^ 3`   |
| `<<=`    | Left Shift Assignment     | `a <<= 3` is short for `a = a << 3` |
| `>>=`    | Right Shift Assignment    | `a >>= 3` is short for `a = a >> 3` |
