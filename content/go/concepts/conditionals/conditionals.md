---
Title: 'Conditionals'
Description: 'Conditionals are used to evaluate if an expression is true or false and execute code based on that value.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Comparison'
  - 'Booleans'
  - 'If'
  - 'Else'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

In Go, conditionals are used to execute based on whether an expression evaluates to `true` or `false`, primarily with the `if`, `else`, and `else if` statements.

Conditionals can  be nested elsewhere such as inside the [`switch`](https://www.codecademy.com/resources/docs/go/switch) and [`for`](https://www.codecademy.com/resources/docs/go/loops) statements.

## The `if` Statement

The `if` statement is mostly associated with conditionals. The code block inside an `if` statement executes if a condition evaluates  `true`. Otherwise, it is skipped.

### Syntax

If the `condition` is `true`, the `statements` inside the code block will be executed. Execution continues after the `if` block regardless of the value of `condition`.

```pseudo
if condition {
  statements
}
```

## The `else` Statement

The `else` statement provides an optional block of code that execute if the prior conditions evaluate to `false`.

### Syntax

If `condition` is `true`, `statements_1` will execute. If `condition` is `false`, `statements_2` will execute instead. Execution then continues after the `else` block.

```pseudo
if condition {
  statements_1
} else {
  statements_2
}
```

## The `else if` Statement

The addition of `else if` statements allow additional conditions to be tested if the prior ones are `false`. Each is associated with its own block of code to execute if its condition is `true`.

### Syntax

If `condition_1` is `true`, execute `statements_1`. If `condition_1` is `false` and `condition_2` is `true`, then execute `statements_2`. If neither condition is `true`, execute `statements_3`. Execution then continues after the `else` block. There can be any number of `else if` statements, and the final `else` is optional.

```pseudo
if condition_1 {
  statements_1
} else if condition_2 {
  statements_2
} else {
  statements_3
}
```

## Codebyte Example

```codebyte/golang
package main
import "fmt"

func main() {
  number := 522

  if number == 0 {
    fmt.Println("Number is zero.")
  } else if number % 2 == 0 {
    fmt.Printf("Number %d is even.\n", number)
  } else {
    fmt.Printf("Number %d is odd.\n", number)
  }
}
```

## Comparison Operators

Conditional expressions often use comparison operators. Comparison operators compare two expressions and return `true` or `false` based on the operator and the values of the expression. Go has the following comparison operators.

- `==` Takes two expressions, `(A == B)`, and returns `true` if both expressions are equal.
- `!=` Takes two expressions, `(A != B)`, and returns `true` if both expressions are not equal.
- `<` Takes two expressions, `(A < B)`, and returns `true` if the left expression is numerically less than or comes lexically before the right one.
- `<=` Takes two expressions, `(A <= B)`, and returns `true` if the left expression is numerically less than or comes lexically before the right one, or if both expressions are equal.
- `>` Takes two expressions, `(A > B)`, and returns `true` if the left expression is numerically greater than or comes lexically after the right one.
- `>=` Takes two expressions, `(A >= B)`, and returns `true` if the left expression is numerically greater than or comes lexically after the right one, or if both expressions are equal.

## Logical Operators

Conditional expressions may use logical operators. Logical operators return a `true` or `false` value based on the `true` or `false` values of the expressions they operate on.

- `&&` AND operator. Takes two expressions, `(A && B)`, and returns `true` if both expressions are `true`.
- `||` OR operator. Takes two expressions, `(A || B)`, and returns `true` if one of them is `true`.
- `!` NOT operator. Takes one expression, `!(A)`, and returns `true` if its value is `false`.
