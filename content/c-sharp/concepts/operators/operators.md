---
Title: 'Operators'
Description: 'Operators are used to perform various operations on variables and values.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**Operators** are used to perform various operations on variables and values.

## Syntax

The following code snippet uses the assignment operator, `=`, to set `myVariable` to the value of `num1` and `num2` with an arithmetic operator operating on them. For example, if `operator` represented `*`, `myVariable` would be assigned a value of `num1 * num2`.

```pseudo
myVariable = num1 operator num2;
```

Operators can be organized into the following groups:

- Arithmetic operators for performing traditional math evaluations.
- Assignment operators for assigning values to variables.
- Comparison operators for comparing two values.
- Logical operators for combining `Boolean` values.
- [Bitwise operators](https://www.codecademy.com/resources/docs/general/bitwise-operator) for manipulating the bits of a number.

## Arithmetic Operators

C# has the following arithmetic operators:

- Addition, `+`, returns the sum of two numbers.
- Subtraction, `-`, returns the difference between two numbers.
- Multiplication, `*`, returns the product of two numbers.
- Division, `/`, returns the quotient of two numbers.
- Modulus, `%`, returns the remainder of one number divided by another.

The ones above operate on two values. C# also has two unary operators:

- Increment, `++`, which increments its single operand by one.
- Decrement, `--`, which decrements its single operand by one.

Unlike the other arithmetic operators, the increment and decrement operators change the value of their operand as well as return a value. They also return different results depending on if they precede or follow the operand. Preceding the operand returns the value of the operand before the operation. Following the operand returns the value of the operand after the operation.

```cs
int x = 5;
int y = x++; // x now equals 6, y equals 5
int z = --x; // x now equals 5, z equals 5
```

## Logical Operators

C# has the following logical operators:

- The `&` (and) operator returns `true` if both operands are `true`.
- The `|` (or) operator returns `true` if either operand is `true`.
- The `^` (xor) operator returns `true` if only one of its operands are `true`
- The `!` (not) operator returns `true` if its single operand is `false`.

> **Note:** `&`,`|`, and `^` are logical operators when the operands are `bool` types. When the operands are numbers they perform bitwise operations. See **Bitwise Operators** below.

The above operators always evaluate both operands. There are also these conditional "short circuiting" operators:

- The `&&` (conditional and) operator returns `true` if both operands are `true`. If the first operand is `false`, the second operand is not evaluated.
- The `||` (conditional or) operator returns `true` if either operand is `true`. If the first operand is `true` the second operand is not evaluated.

## Assignment Operators

C# includes the following assignment operators:

- The `=` operator assigns the value on the right to the variable on the left.
- The `+=` operator updates a variable by incrementing its value and reassigning it.
- The `-=` operator updates a variable by decrementing its value and reassigning it.
- The `*=` operator updates a variable by multiplying its value and reassigning it.
- The `/=` operator updates a variable by dividing its value and reassigning it.
- The `%=` operator updates a variable by calculating its modulus against another value and reassigning it.

The assignment operators of the form `op=`, where `op` is a binary arithmetic operator, is a shorthand. The expression `x = x op y;` can be shortened to `x op= y;`. This compound assignment also works with the logical operators `&`, `|` and `^`.

- The `??=` operator assigns the value on the right to the variable on the left if the variable on the left is `null`.

## Comparison Operators

C# has the following comparison operators:

- Equal, `==`, for returning `true` if two values are equal.
- Not equal, `!=`, for returning `true` if two values are not equal.
- Less than, `<`, for returning `true` if the left value is less than the right value.
- Less than or equal to, `<=`, for returning `true` if the left value is less than or equal to the right value.
- Greater than, `>`, for returning `true` if the left value is greater than the right value.
- Greater than or equal to, `>=`, for returning `true` if the left value is greater than or equal to the right value.

> **Note:** for these comparison operators, if any operand is not a number (`Double.NaN` or `Single.NaN`) the result of the operation is `false`.

## Bitwise Operators

C# has the following operators that perform operations on the individual bits of a number.

- Bitwise complement, `~`, inverts each bit in a number.
- Left-shift, `<<`, shifts its left operand left by the number of bits specified in its right operand. New right positions are zero-filled.
- Right-shift, `>>`, shifts its left operand right by the number of bits specified in its right operand. For signed integers, left positions are filled with the value of the high-order bit. For unsigned integers, left positions are filled with zero.
- Unsigned right-shift, `>>>`, same as `>>` except left positions are always zero-filled.
- Logical AND, `&`, performs a bitwise logical AND of its operands.
- Logical OR, `|`, performs a bitwise logical OR on its operands.
- Logical XOR, `^`, performs a bitwise logical XOR on its operands.
