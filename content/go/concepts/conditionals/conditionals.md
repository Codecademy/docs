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

Conditionals, primarily the `if`, `else`, and `else if` statements, are used to execute based on whether an expression evaluates to `true` or `false`.

Conditionals can be nested elsewhere such as inside the [`switch`](https://www.codecademy.com/resources/docs/go/switch) and [`for`](https://www.codecademy.com/resources/docs/go/loops) statements.

## The `if` Statement

The `if` statement is mostly associated with conditionals. The code block inside an `if` statement executes if a condition evaluates `true`. Otherwise, it is skipped.

### Syntax

```pseudo
if condition {
  statements
}
```

If the `condition` is `true`, the `statements` inside the code block will be executed. Execution continues after the `if` block regardless of the value of `condition`.

The `if` statement in Go also allows a small statement to be executed before the condition is evaluated. In this respect, it is similar to the [`for`](https://www.codecademy.com/resources/docs/go/loops) statement.

```pseudo
if statement; condition {
  statements
}
```

### Example

```go
i := 0

if i++; i > 0 {
  fmt.Println("This line will be executed.")
}
```

## The `else` Statement

The `else` statement provides an optional block of code that executes if all prior conditions evaluate to `false`.

### Syntax

```pseudo
if condition {
  statements_1
} else {
  statements_2
}
```

If `condition` is `true`, `statements_1` will execute. If `condition` is `false`, `statements_2` will execute instead. Execution then continues after the `else` block.

## The `else if` Statement

The addition of `else if` statements allow additional conditions to be tested if the prior ones are `false`. Each is associated with its own block of code to execute if its condition is `true`.

### Syntax

```pseudo
if condition_1 {
  statements_1
} else if condition_2 {
  statements_2
} else {
  statements_3
}
```

The control flow logic of the code below can be broken down like this:

- If `condition_1` is `true`, `statements_1` will execute.
- Else, if `condition_1` is `false` and `condition_2` is `true`, `statements_2` will be executed instead.
- However, if neither condition is `true`, `statements_3` will execute.

Execution then continues after the `else` block. There can be any number of `else if` statements, and the final `else` is optional.

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

For further information on writing conditional expressions see the sections "Comparison Operators" and "Logical Operators" under [Go Operators](https://www.codecademy.com/resources/docs/go/operators)
