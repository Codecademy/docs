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

**Operators** are used to perform operations on variables and values. They are symbols that tell the compiler to perform specific mathematical or logical functions. The C language provides the following types of operators:

- Arithmetic Operators
- Relational Operators
- Logical Operators
- Bitwise Operators
- Assignment Operators
- Misc Operators

## Arithmetic Operators

C has the following basic arithmetic operators to perform common mathematical operations:

| Operator |      Name      | Description                                                 |
| :------: | :------------: | ----------------------------------------------------------- |
|   `+`    |    Addition    | `x + y` returns the sum of `x` and `y`                      |
|   `-`    |  Subtraction   | `x - y` returns the difference of `x` and `y`               |
|   `*`    | Multiplication | `x * y` returns the product of `x` and `y`                  |
|   `/`    |    Division    | `x / y` returns the quotient of `x` and `y`                 |
|   `%`    |     Modulo     | `x % y` returns the integer remainder of `x` divided by `y` |
|   `++`   |   Increment    | `x++` returns `x + 1`                                       |
|   `--`   |   Decrement    | `x--` returns `x - 1`                                       |

```c
int x = 0;
x = x + 4; // x is now 4
x = x - 1; // x is now 3
x = x * 8; // x is now 24
x = x / 4; // x is now 6
x = x % 4; // x is now 2
x++;       // x is now 3
x--;       // x is now 2
```

## Relational Operators

Relational operators compare two values and return `true` or `false`.

| Operator |           Name           | Description                                                |
| :------: | :----------------------: | ---------------------------------------------------------- |
|   `==`   |          Equal           | `x == y` is `true` if `x` and `y` are equal.               |
|   `!=`   |        Not Equal         | `x != y` is `true` if `x` and `y` are not equal.           |
|   `<`    |        Less Than         | `x < y` is `true` if `x` is less than `y`.                 |
|   `>`    |       Greater Than       | `x > y` is `true` if `x` is greater than `y`.              |
|   `<=`   |  Less Than or Equal to   | `x <= y` is `true` if `x` is less than or equal to `y`.    |
|   `>=`   | Greater Than or Equal to | `x >= y` is `true` if `x` is greater than or equal to `y`. |

```c
int x = 7;
int y = 5;

if (x > y) {
  // This code will run.
}

if (x == y) {
  // This code won't run.
}
```

## Logical Operators

Logical operators operate on boolean values and return boolean values.

| Operator | Name | Description                                                        |
| :------: | :--: | ------------------------------------------------------------------ |
|   `!`    | Not  | `!x` is `true` when `x` is `false` and `false` when `x` is `true`. |
|   `&&`   | And  | `x && y` is `true` only if `x` and `y` are both `true`.            |
|  `\|\|`  |  Or  | `x \|\| y` is `true` if either `x` or `y` is `true`.               |

```c
int x = 7;
int y = 5;

if (x > y \|\| x == y) {
  // This code will run.
}

if (x == y && x < 0) {
  // This code won't run.
}
```

## Bitwise Operators

Bitwise operators manipulate individual bits in an integer.

| Operator |    Name     | Description                                                    |
| :------: | :---------: | -------------------------------------------------------------- |
|   `&`    |     And     | Result has bit set only where both operands have that bit set. |
|   `\|`   |     Or      | Result has bit set if either operand has that bit set.         |
|   `^`    |     Xor     | Result has bit set only if only one operand has that bit set.  |
|   `~`    |     Not     | Takes a single operand and inverts each bit in it.             |
|   `<<`   | Left shift  | `a << b` means `a`'s bits are shifted to the left `b` spaces.  |
|   `>>`   | Right shift | `a >> b` means `a`'s bits are shifted to the right `b` spaces. |

```c
int x;

x = 19 & 7;
// x is 3 : 10011 & 00111 = 00011

x = 19 | 7;
// x is 23 : 10011 | 00111 = 10111

x = 19 ^ 7;
x is 20 : 10011 ^ 00111 = 10100

x = 7 << 2;
// x is 28 : 00111 << 2 = 11100

x = 19 >> 2;
// x is 4 : 10011 >> 2 = 00100
```

## Assignment Operators

Assignment operators assign the value on the right to the variable on the left.

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

## Misc Operators

Misc operators don't fit into a particular category.

|  Operator  |         Name         | Description                                                                     |
| :--------: | :------------------: | ------------------------------------------------------------------------------- |
| `sizeof()` | Addition Assignment  | `sizeof(x)` returns the size of variable `x`.                                   |
|    `&`     |       Address        | `&x` returns the address of variable `x`.                                       |
|    `*`     |       Pointer        | `*x` returns a pointer to variable `x`. Not to be confused with multiplication. |
|    `?:`    | Conditional Operator | `expression?x:y` returns `x` when `expression` is `true`, `y` otherwise.        |
