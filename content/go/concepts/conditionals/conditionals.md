---
Title: 'Conditionals'
Description: 'Conditionals are used to evaluate if an expression is True or False and execute code based on that value.'
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

Conditionals are used to evaluate if an expression is `true` or `false` and execute code based on that value. There are several statements that use conditional expressions to determine what code to execute. The primary one being the  `if...else if...else`.

Other statements that can use conditional statements are [`switch`](https://www.codecademy.com/resources/docs/go/switch) and `for`(https://www.codecademy.com/resources/docs/go/loops).

## The `if...else if...else` Statements

One of the statements that's thought of most often in connection with conditional statements is the `if` statement. In it's most basic form, the `if` statement evaluates if a condition is `true`, and if so, executes its associated code block. The addition of `else if` allows additional conditions to be tested if the prior ones are `false`, each associted with its own block of code to execute if its condition is `true`. The `else` statement provides a final block of code to execute if all prior `if` and `else if` conditions are `false`.

### Syntax

If `condition` is `true`, execute `statements`. Execution continues after the `if` block regardless of the value of `condition`.

```pseudo
if condition {
  statements
}
```

If `condition` is `true`, execute `statements_1`. If `condition` is `false`, execute `statements_2`. Execution then continues after the `else` block.

```pseudo
if condition {
  statements_1
} else {
  statements_2
}
```

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

### Example

```codebyte/golang
package main
import "fmt"

number := 522

if number == 0 {
  fmt.Println("Number is zero.")
} else if number % 2 == 0 {
  fmt.Println("Number is even.")
} else {
  fmt.Println("Number is odd.")
}
```

## Comparison Operators

Conditional expressions often use comparison operators. Comparison operators compare two expressions and return `true` or `false` based on the operatior and the values of the expression. Go has the following comparison operators.

- `==` returns `true` if both expressions are equal.
- `!=` return `true` if both expressions are not equal.
- `<` returns `true` if the left expression is numerically less than or comes lexically before the right one.
- `<=` returns `true` if the left expression is numerically less than or comes lexically before the right one, or if both expressions are equal.
- `>` returns `true` if the left expression is numerically greater than or comes lexically after the right one.
- `>=` returns `true` if the left expression is numerically greater than or comes lexically after the right one, or if both expressions are equal.

## Logical Operators

Conditional expressions may use logical operators. Logical operators return a `true` or `false` value based on the `true` or `false` values of the expressions they operate on.

- `&&` AND operator. Takes two expressions, `(A && B)`, and returns `true` if both expressions are `true`.
- `||` OR operator. Takes two expressions, `(A || B)`, and returns `true` if one of them is `true`.
- `!` NOT operator. Takes one expression, `!(A)`, and returns `true` if its value is `false`.
