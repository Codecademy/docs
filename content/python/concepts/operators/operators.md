---
Title: 'Operators'
Description: 'Operators are used to perform various operations on variables and values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Operators are used to perform various operations on variables and values. The standard arithmetic and assignment operators are the most familiar.

## Syntax

The following code snippet uses the assignment operator, `=`, to set `my_variable` to the value of `num1` and `num2` with an arithmetic operator acting on them. For example, if `operator` represented `*`, `my_variable` would be assigned a value of `num1 * num2`.

```pseudo
my_variable = num1 operator num2
```

Python operators can be organized into the following groups:

- Arithmetic operators for performing traditional math evaluations.
- Assignment operators for assigning values to variables.
- Comparison operators for comparing two values.
- Logical operators for combining boolean values.

## Arithmetic Operators

Python has the following arithmetic operators:

- Addition, `+`, which returns the sum of two numbers.
- Subtraction, `-`, which returns the difference of two numbers.
- Multiplication, `*`, which returns the product of two numbers.
- Division, `/`, which returns the quotient of two numbers.
- Exponentiation, `**`, which returns the value of one number raised to the power of another.
- Modulus, `%`, which returns the remainder of one number divided by another.
- Floor division, `//`, which returns the integer quotient of two numbers.

## Assignment Operators

Python includes the following assignment operators:

- The `=` operator assigns the value on the right to the variable on the left.
- The `+=` operator updates a variable by incrementing its value and reassigning it.
- The `-=` operator updates a variable by decrementing its value and reassigning it.
- The `*=` operator updates a variable by multiplying its value and reassigning it.
- The `/=` operator updates a variable by dividing its value and reassigning it.
- The `%=` operator updates a variable by calculating its modulus against another value and reassigning it.

## Comparison Operators

Python has the following comparison operators:

- Equal, `==`, for returning `True` if two values are equal.
- Not equal, `!=`, for returning `True` if two values are not equal.
- Less than, `<`, for returning `True` if left value less than right value.
- Less than or equal to, `<=`, for returning `True` if left value is less than or equal to right value.
- Greater than, `>`, for returning `True` if left value greater than right value.
- Greater than or equal to, `>=`, for returning `True` if left value greater than or equal to right value.

## Logical Operators

Python has the following logical operators:

- The `and` operator returns `True` if both statements are `True`.
- The `or` operator returns `True` if either statement is `True`.
- The `not` operator returns `True` if its associated statement is `False`.

## Order of Operations

Python evaluates an expression in order of precedence as follows:

- Items in parentheses, (`(`...`)`), have the highest level of precedence, expressions within them are evaluated first.
- Exponentiation (`**`)
- Multiplication and division operators (`*`, `/`, `//` & `%`)
- Addition and subtraction (`+` & `-`)
- Comparison (`<`, `<=`, `>` & `>=`)
- Equality (`==` & `!=`)
- `not`
- `and`
- `or`

## Membership operators
- The `in` operator returns `True` if the element in the right CONTAINS the element in the left
- The `not in` operator returns `False` if the element in the right NOT CONTAINS the element in the left

**Note:** Items at the same precedence are evaluated left to right. The exception to this is exponentiation, which evaluates right to left.
