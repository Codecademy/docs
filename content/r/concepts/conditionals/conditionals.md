---
Title: 'Conditionals'
Description: 'Conditionals allow users to control the flow of a program based on certain conditions.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Booleans'
  - 'Comparison'
  - 'Conditionals'
  - 'Logic'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

In R, conditionals help control the flow of a program. They evaluate Boolean expressions and execute certain blocks of code depending on whether the expression evaluates to `TRUE` or `FALSE`. This is especially useful while working with dynamic data, automating tasks, or writing functions with variable behavior.

## If Statement

The R `if` statement is used to run a block of code if a condition is `TRUE`.

### Syntax

```pseudo
if (condition) {
  # Code to execute if condition is TRUE
}
```

### Example

This example demonstrates the usage of the `if` statement in R:

```r
x <- 10

if (x > 6) {
  print("x is greater than 6")
}
```

Here is the output:

```shell
[1] "x is greater than 6"
```

## If-Else Statement

The R `if-else` statement allows the execution of a block of code if a condition is `TRUE`, and a separate block of code if the condition is `FALSE`.

### Syntax

```pseudo
if (condition) {
  # Code to execute if condition is TRUE
} else {
  # Code to execute if condition is FALSE
}
```

### Example

This example demonstrates the usage of the `if-else` statement in R:

```r
x <- 3

if (x > 6) {
  print("x is greater than 6")
} else {
  print("x is less than or equal to 6")
}
```

Here is the output:

```shell
[1] "x is less than or equal to 6"
```

## Else-If Statement

When there is a need to check multiple conditions, the R `else-if` statement can be used to evaluate them sequentially.

### Syntax

```pseudo
if (condition1) {
  # Code if condition1 is TRUE
} else if (condition2) {
  # Code if condition2 is TRUE
} else {
  # Code if all conditions are FALSE
}
```

### Example

This example demonstrates the usage of the `else-if` statement in R:

```r
x <- 5

if (x > 12) {
  print("x is greater than 12")
} else if (x == 5) {
  print("x is equal to 5")
} else {
  print("x is less than 12 and not equal to 5")
}
```

Here is the output:

```shell
[1] "x is equal to 5"
```

## Nested If Statement

R `if` statements can be nested within each other for more complex logical checks.

### Syntax

```pseudo
if (condition1) {
  if (condition2) {
    # Code to execute if both condition1 and condition2 are TRUE
  }
}
```

### Example

This example demonstrates the usage of nested `if` statements in R:

```r
x <- 8
y <- 3

if (x > 6) {
  if (y < 6) {
    print("x is greater than 6 and y is less than 6")
  }
}
```

Here is the output:

```shell
[1] "x is greater than 6 and y is less than 6"
```

## Frequently Asked Questions

### 1. Can I use conditionals in a vectorized way in R?

Yes, you can use the R `ifelse()` function for vectorized operations:

```r
x <- c(2, 5, 8)

result <- ifelse(x > 5, "High", "Low")

print(result) # Output: [1] "Low"  "Low"  "High"
```

### 2. What’s the difference between R `if` and `ifelse()`?

- `if` statement in R is used for single, scalar conditions.
- `ifelse()` function in R is vectorized and works over entire vectors.

### 3. Can I use logical operators in R conditionals?

Yes. You can combine conditions using `&` (AND), `|` (OR), and `!` (NOT):

```r
x <- 4
if (x > 2 & x < 10) {
  print("x is between 2 and 10")
} # Output: [1] "x is between 2 and 10"
```
