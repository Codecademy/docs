# R Conditionals

Conditional statements in R allow you to control the flow of your program based on certain conditions. You can execute different blocks of code depending on whether a condition is true or false.

## If Statement

The `if` statement is used to execute a block of code if a condition is true. The general syntax is:

```r
if (condition) {
  # code to be executed if condition is true
}
```

Here's an example:

```r
x <- 10

if (x > 5) {
  print("x is greater than 5")
}

```

In this example, the code inside the `if` block will be executed because the condition `x > 5` is true.

## If-Else Statement

The `if-else` statement allows you to execute one block of code if a condition is true, and another block of code if the condition is false. The general syntax is:

```r
if (condition) {
  # code to be executed if condition is true
} else {
  # code to be executed if condition is false
}

```

Here's an example:

```r
x <- 3

if (x > 5) {
  print("x is greater than 5")
} else {
  print("x is less than or equal to 5")
}

```

In this example, since the condition `x > 5` is false, the code inside the `else` block will be executed.

## Comparison Operators

Comparison operators in R allow you to compare values and produce logical results. Here are some commonly used comparison operators:

- `<` (less than): Returns `TRUE` if the left operand is less than the right operand.
    
    Example:
    
    ```r
    x <- 5
    y <- 10
    
    if (x < y) {
      print("x is less than y")
    }
    
    ```
    
    Output: `x is less than y`
    
- `>` (greater than): Returns `TRUE` if the left operand is greater than the right operand.
    
    Example:
    
    ```r
    x <- 5
    y <- 10
    
    if (x > y) {
      print("x is greater than y")
    }
    
    ```
    
    (No output in this case)
    
- `==` (equal to): Returns `TRUE` if the left operand is equal to the right operand.
    
    Example:
    
    ```r
    x <- 5
    y <- 5
    
    if (x == y) {
      print("x is equal to y")
    }
    
    ```
    
    Output: `x is equal to y`
    
- `!=` (not equal to): Returns `TRUE` if the left operand is not equal to the right operand.
    
    Example:
    
    ```r
    x <- 5
    y <- 10
    
    if (x != y) {
      print("x is not equal to y")
    }
    
    ```
    
    Output: `x is not equal to y`
    
- `<=` (less than or equal to): Returns `TRUE` if the left operand is less than or equal to the right operand.
    
    Example:
    
    ```r
    x <- 5
    y <- 10
    
    if (x <= y) {
      print("x is less than or equal to y")
    }
    
    ```
    
    Output: `x is less than or equal to y`
    
- `>=` (greater than or equal to): Returns `TRUE` if the left operand is greater than or equal to the right operand.
    
    Example
    

:

```r
x <- 5
y <- 5

if (x >= y) {
  print("x is greater than or equal to y")
}

```

Output: `x is greater than or equal to y`

These operators are commonly used in conditional statements to compare values and make decisions.

## Logical Operators

Logical operators in R allow you to combine or negate logical values. Here are the commonly used logical operators:

- `&&` (and): Returns `TRUE` if both the left and right operands are `TRUE`.
    
    Example:
    
    ```r
    x <- 5
    y <- 10
    
    if (x > 0 && y > 0) {
      print("Both x and y are positive")
    }
    
    ```
    
    Output: `Both x and y are positive`
    
- `||` (or): Returns `TRUE` if either the left or right operand is `TRUE`.
    
    Example:
    
    ```r
    x <- 5
    y <- -10
    
    if (x > 0 || y > 0) {
      print("Either x or y is positive")
    }
    
    ```
    
    Output: `Either x or y is positive`
    
- `!` (not): Negates a logical value. If the operand is `TRUE`, it returns `FALSE`, and if the operand is `FALSE`, it returns `TRUE`.
    
    Example:
    
    ```r
    x <- 5
    
    if (!(x == 10)) {
      print("x is not equal to 10")
    }
    
    ```
    
    Output: `x is not equal to 10`
    

Logical operators are often used to combine multiple conditions in conditional statements or to negate a condition.

These are the basic conditional statements, comparison operators, and logical operators in R. They allow you to control the flow of your program, compare values, and make decisions based on specific conditions.