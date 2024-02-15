---
Title: 'Operators'
Description: 'Go supports a number of different operators. These are symbols that modify the value of one or more expressions.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

Go supports a number of different operators. These are symbols that modify the value of one or more expressions. These symbols include arithmetic operators, comparison operators, logical operators, bitwise operators, and assignment operators.

## Arithmetic Operators

Arithmetic operators take one or two numeric expressions and return a numeric result.

- `+` Takes two expressions, `(A + B)`, and returns the sum of the two expressions.
- `-` Takes two expressions, `(A - B)`, and returns the difference of the two expressions, the first expression minus the second.
- `*` Takes two expressions, `(A * B)`, and returns the product of the two expressions.
- `/` Takes two expressions, `(A / B)`, and returns the first expression divided by the second.
- `%` Takes two expressions, `(A % B)`, and returns the modulus, the remainder after the integer division of the first expression by the second.
- `++` Takes one expression, `(A++)`, and returns the expression incremented by one.
- `--` Takes one expression, `(B--)`, and returns the expression decremented by one.

## Comparison Operators

Comparison operators compare two expressions and return `true` or `false` based on the operator and the values of the expression. Go has the following comparison operators.

- `==`: Takes two expressions, `(A == B)`, and returns `true` if both expressions are equal.
- `!=`: Takes two expressions, `(A != B)`, and returns `true` if both expressions are not equal.
- `<`: Takes two expressions, `(A < B)`, and returns `true` if the left expression is numerically less than or comes lexically before the right one.
- `<=`: Takes two expressions, `(A <= B)`, and returns `true` if the left expression is numerically less than or comes lexically before the right one, or if both expressions are equal.
- `>`: Takes two expressions, `(A > B)`, and returns `true` if the left expression is numerically greater than or comes lexically after the right one.
- `>=`: Takes two expressions, `(A >= B)`, and returns `true` if the left expression is numerically greater than or comes lexically after the right one, or if both expressions are equal.

## Logical Operators

Logical operators return a `true` or `false` value based on the `true` or `false` values of the expressions they operate on. When expressions are numeric, a zero value is treated as `false` and a non-zero value is treated as `true`.

- `&&` AND operator: Takes two expressions, `(A && B)`, and returns `true` if both expressions are `true`.
- `||` OR operator: Takes two expressions, `(A || B)`, and returns `true` if one of them is `true`.
- `!` NOT operator: Takes one expression, `!(A)`, and returns `true` if its value is `false`.

## Bitwise Operators

Bitwise operators manipulate the individual bits of their numeric expressions.

- `&` Binary AND Operator: Takes two expressions, `(A & B)`, result will have a bit set if the corresponding bit in each expression is set.
- `|` Binary OR Operator: Takes two expressions, `(A | B)`, result will have a bit set if either expression has the corresponding bit set.
- `^` Binary XOR Operator: Takes two arguments, `(A ^ B)`, result will have a bit set if only one corresponding bit is set between the two expressions.
- `<<` Binary Left Shift Operator: Takes two arguments, `(A << B)`, result will be the first argument with its bits moved to the left the number of positions specified by the second.
- `>>` Binary Right Shift Operator: Takes two arguments, `(A >> B)`, result will be the first argument with its bits moved to the right the number of positions specified by the second.

## Assignment Operators

Assignment operators store the value of an expression into a variable. The variable being assigned to is always on the left.

- `=`: Assigns the value of the expression to the right to the variable on the left.

  `C = A + B` stores the value of `A + B` into the variable `C`.

- `+=`: Adds the value on the right to the value in the variable on the left and assigns it to the variable.

  `C += A` is the same as `C = C + A`.

- `-=`: Subtracts the value on the right from the value in the variable on the left and assigns it to the variable.

  `C -= A` is the same as `C = C - A`.

- `*=`: Multiplies the value on the right to the value in the variable to the left and assigns it to the variable.

  `C *= A` is the same as `C = C * A`.

- `/=`: Divides the value in the variable on the left by the value on the right and stores the result in the variable.

  `C /= A` is the same as `C = C / A`.

- `%=`: Performs an integer division of the value in the variable on the left by the value on the right and stores the remainder in the variable.

  `C %= A` is the same as `C = C % A`.

- `<<=`: Does a binary left shift operation on the value in the variable on the left by the number of positions specified on the right and stores the result in the variable.

  `C <<= A` is the same as `C = C << A`.

- `>>=`: Does a binary right shift operation on the value in the variable on the left by the number of positions specified on the right and stores the result in the variable.

  `C >>= A` is the same as `C = C >> A`.

- `&=`: Does a bitwise AND operation between the value in the variable on the left with the value on the right and stores the result in the variable.

  `C &= A` is the same as `C = C & A`.

- `|=`: Does a bitwise OR operation between the value in the variable on the left and the value on the right and stores the result in the variable.

  `C |= A` is the same as `C = C | A`.

- `^=`: Does a bitwise XOR operation between the value in the variable on the left and the value on the right and stores the value in the variable.

  `C ^= A` is the same as `C = C ^ A`.
