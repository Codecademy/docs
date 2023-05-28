---
Title: 'Conditionals'
Description: 'Conditional statements return a boolean value that provides control flow in a program.'
Subjects:
  - 'Conditional Statements'
  - 'Comparison Operators'
  - 'Logical Operators'
Tags:
  - 'Conditionals'
  - 'Comparison'
  - 'Logic'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

**Conditional** statements in R allow the control of flow in programs based on certain conditions. Using these statements different blocks of code can be executed depending on whether a condition is true or false.

## If Statement

The `if` statement is used to execute a block of code if a condition is true. The general syntax is:

```pseudo
if (condition) {
  # Code to be executed if condition is true
}
```

## If-Else Statement

The `if-else` statement allows the execution of a block of code if a condition is true, and another block of code if the condition is false. The general syntax is:

```pseudo
if (condition) {
  # Code to be executed if condition is true
} else {
  # Code to be executed if condition is false
}
```

Examples of `if-else` statements:

```r
# If Statement
x <- 10

if (x > 5) {
  print("x is greater than 5")
}
# In this example, the code inside the if block will be executed because the condition x > 5 is true.


# If-Else Statement
x <- 3

if (x > 5) {
  print("x is greater than 5")
} else {
  print("x is less than or equal to 5")
}
# In this example, since the condition x > 5 is false, the code inside the else block will be executed.
```

## Comparison Operators

Comparison operators in R allow the comparison of values and produce logical results. Here are some commonly used comparison operators:

- `<` (less than): Returns `TRUE` if the left operand is less than the right operand.
- `>` (greater than): Returns `TRUE` if the left operand is greater than the right operand.
- `==` (equal to): Returns `TRUE` if the left operand is equal to the right operand.
- `!=` (not equal to): Returns `TRUE` if the left operand is not equal to the right operand.
- `<=` (less than or equal to): Returns `TRUE` if the left operand is less than or equal to the right operand.
- `>=` (greater than or equal to): Returns `TRUE` if the left operand is greater than or equal to the right operand.

Examples of comparison operators in R:

```r
# Less than (<)
x <- 5
y <- 10

if (x < y) {
  print("x is less than y")
}
# Output: x is less than y


# Greater than (>)
x <- 5
y <- 10

if (x > y) {
  print("x is greater than y")
}
# No output in this case


# Equal to (==)
x <- 5
y <- 5

if (x == y) {
  print("x is equal to y")
}
# Output: x is equal to y


# Not equal to (!=)
x <- 5
y <- 10

if (x != y) {
  print("x is not equal to y")
}
# Output: x is not equal to y


# Less than or equal to (<=)
x <- 5
y <- 10

if (x <= y) {
  print("x is less than or equal to y")
}
# Output: x is less than or equal to y


# Greater than or equal to (>=)
x <- 5
y <- 5

if (x >= y) {
  print("x is greater than or equal to y")
}
# Output: x is greater than or equal to y
```

These operators are commonly used in conditional statements to compare values and make decisions.

## Logical Operators

Logical operators in R can be used to combine or negate logical values. Here are the commonly used logical operators:

- `&&` (and): Returns `TRUE` if both the left and right operands are `TRUE`.
- `||` (or): Returns `TRUE` if either the left or right operand is `TRUE`.
- `!` (not): Negates a logical value. If the operand is `TRUE`, it returns `FALSE`, and if the operand is `FALSE`, it returns `TRUE`.

Examples of logical operators in R:

```r
# AND (&&)
x <- 5
y <- 10

if (x > 0 && y > 0) {
  print("Both x and y are positive")
}
# Output: Both x and y are positive


# OR (||)
x <- 5
y <- -10

if (x > 0 || y > 0) {
  print("Either x or y is positive")
}
# Output: Either x or y is positive


# NOT (!)
x <- 5

if (!(x == 10)) {
  print("x is not equal to 10")
}
# Output: x is not equal to 10
```

Logical operators are often used to combine multiple conditions in conditional statements or to negate a condition.

These are the basic conditional statements, comparison operators, and logical operators in R. They can be leveraged to control the flow of a program, compare values, and make decisions based on specific conditions.
