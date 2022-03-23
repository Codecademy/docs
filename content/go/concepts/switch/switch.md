---
Title: 'Switch'
Description: 'A switch statement allows the selective execution of one of several blocks of code based on the value of an expression.'
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

A `switch` statement allows the selective execution of one of several blocks of code based on the value of an expression. It can be thought of as an expanded `if ... else` statement, with many potential `if` clauses.

## Syntax 1

There are many syntaxes that can be used in the `switch` statement. The following is probably the most common:

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

When `<expression>` is equal to the value of one of the case statements, the corresponding `<statements>` block is executed. If the `<expression>` matches none of the `case` values, then the optional `default` statements block is executed. If the `default` block is omitted, and none of the values are matched, none of the statements in the switch block are executed.

In Go, the `switch` statement differs from other languages like [C++](https://www.codecademy.com/resources/docs/cpp/switch) and [Java](https://www.codecademy.com/resources/docs/java/switch) in that the values used by the `case` statements are not limited to constants. They can also be variables or full expressions. Additionally, Go only executes the selected `case <expressions>` block, or the `default` block, so no "break" statement is needed. Code execution automatically resumes after the `switch` statement.

## Syntax 2

The `<expression>` after the `switch` can be omitted, making the `case`s behave more like expressions in `if... else` statements:

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

The first `case <expression>` that evaluates to true will execute its corresponding `<statements>`. Again, the `default` block is optional, and will execute its `<statements>` if none of the `case` statements are executed.

This is equivalent to:

```pseudo
switch true { ... }
```

## Syntax 3

In each case, a given `case` statement can have more than one matching value (or expression), separated by commas:

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

Values are compared left-to-right and top-to-bottom. The first `case` block to match the `switch` expression will be executed.

## Example

In the example below, a variable `i` is declared and used in a `switch` expression to test whether the result will be even or odd:

```go
i := 7
switch i % 2 {
case 0:
   fmt.Printf("%d is even.\n",i)
case 1:
   fmt.Printf("%d is odd.\n",i)
}

// Output: 7 is odd.
```

## Codebyte Example

```codebyte/golang
package main

import (
  "fmt"
  "time"
)

func main() {
  today := time.Now().Weekday()

  switch today {
  case time.Saturday, time.Sunday:
    fmt.Println("It's the weekend")
  case time.Friday:
    fmt.Println("T.G.I.F.")
  default:
    fmt.Println("It's a weekday")
  }
}
```
