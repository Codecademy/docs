---
Title: 'Switch'
Description: 'A switch statement allows the selective execution of one out of several blocks of code based on the value of an expression.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Comparison'
  - 'Control Flow'
  - 'Switch'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

A `switch` statement allows the selective execution of one out of several blocks of code based on the value of an expression. It can be thought of as a expanded `if ... then ... else` statement, with many potential `then` clauses.

## Syntax 1

This is the typical `switch` statement syntax:

```pseudo
switch <expression> {
  case <value 1>:
    <statements>
  case <value 2>:
    <statements>
   .
   .
   .
 case <value N>:
   <statements>
default:
  <statements>
}
```

When `<expression>` is equal to the value of one of the `case` statements, the following `<statements>` block is executed. If the `<expression>` matches none of the `case` values, then the optional `default` `<statements>` block is executed.

The `switch` statement in Go differs from other languages like C++ and Java, in that the values used by the `case` statements need not be constants, they can be variables or full expressions. Also, unlike C++ and Java, in Go only the selected `case` statement block will be executed, so there is no need for a `break` statement.

## Syntax 2

The expression can be omitted after the `switch` and the `switch` behaves more like an `if ... then ... else` statement:

```pseudo
switch {
  case <expression 1>:
    <statements>
  case <expression 2>:
    <statements>
    .
    .
    .
  case <expression N>
    <statements>
  default:
    <statements>
}
```

In this example the first expression that evaluates true will execute the corresponding `case` `<statements>` block. Again, `default` is optional, and will execute its `<statements>` block if none of the `case` statements are executed.

This is equivalent to:

```pseudo
switch true { ... }
```

## Syntax 3

A given `case` statement can have more than one matching value, separated by commas:

```pseudo
switch <expression> {
  case <value 1>, <value 2>, ... <value N>:
    <statements>
    .
    .
    .
default:
  <statements>
}
```

Values are compared left-to-right and top-to-bottom. The first one to match the `switch` expression determines the `case` `<statements>` block to be executed.

## Examples

```go
i := 7
switch i % 2 {
  case 0:
     fmt.Printf("%d is even./n",i)
  case 1:
     fmt.Printf("%d is odd./n",i)
}
```

```go
switch time.Now().Weekday() {
  case time.Saturday, time.Sunday:
    fmt.Println("It's the weekend")
  case time.Friday:
    fmt.Println("T.G.I.F.")
  default:
    fmt.Println("It's a weekday")
}
```
