---
Title: 'Loops'
Description: 'Loops are fundamental programming constructs that allow developers to execute a block of code repeatedly.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Control Flow'
  - 'Iterators'
  - 'Loops'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

**`Loops`** are fundamental programming constructs that allow developers to execute a code block repeatedly. In Go, looping is streamlined and efficient. Unlike many programming languages offering multiple loops, Go uses a single looping construct: the `for` loop. However, this loop is flexible enough to cover the functionality of traditional `while`, `do-while`, and `for` loops in other languages.

## `for` Loop

In Go, `for` loops are defined with a three-component syntax similar to what is used in `for` loops for other languages like C or Java:

```pseudo
for init; condition; post {
  // Statements
}
```

In the syntax:

- `init`: The statement initializes an index [variable](https://www.codecademy.com/resources/docs/go/variables).
- `condition`: The condition used to check the index variable against a boolean expression before every loop. As long as it's `true`, the iteration will continue, and the statements inside the loop will be executed.
- `post`: The statement that executes after every loop, usually to increment/decrement the index variable.

### Example

This example uses the `for` loop to count down from `10` to `1`. The `init` statement sets the variable `i` to `10`, the condition ends the loop when `i` is no longer greater than `0`, and the `post` statement decrements `i` by one after each pass:

```go
package main
import "fmt"

func main() {
  // Counts down from 10 to 1
  for i := 10; i > 0; i-- {
    fmt.Println(i)
  }
}
```

Here is the output:

```shell
10
9
8
7
6
5
4
3
2
1
```

## `for` Loop as a `While` Loop

In Go, the `while` loop is implemented with a `for` loop by omitting the `init` and `post` statements:

```pseudo
for condition {
  // Statements
}
```

The loop will execute as long as `condition` remains true.

### Example

This example behaves the same way as the `for` loop example, except the variable `countdown` is initialized outside the loop, and is decremented inside the loop itself. The condition still runs the loop as long as `countdown` is still greater than `0`:

```go
package main
import "fmt"

func main() {
  countdown := 10

  // Counts down from 10 to 1
  for countdown > 0 {
    fmt.Println(countdown)

    countdown--
  }
}
```

Here is the output:

```shell
10
9
8
7
6
5
4
3
2
1
```

## Infinite Loops

If the `condition` statement is omitted along with the `post` and `init` statements in a `for` loop, the loop will execute indefinitely unless a `break` statement is encountered. This type of loop is known as an infinite loop:

```pseudo
for {
  // Statements
}
```

### Example

This example will print the given [string](https://www.codecademy.com/resources/docs/go/strings) until the program is halted externally:

```go
package main
import "fmt"

func main() {
  // Executes forever
  for {
    fmt.Println("Help! I'm trapped in a loop!")
  }
}
```

Here is the output:

```shell
Help! I'm trapped in a loop!
Help! I'm trapped in a loop!
Help! I'm trapped in a loop!
Help! I'm trapped in a loop!
Help! I'm trapped in a loop!
...
```

## `for...range` Loop

By using the `range` keyword, a `for` loop can step through the items in a collection such as an [array](https://www.codecademy.com/resources/docs/go/arrays), [map](https://www.codecademy.com/resources/docs/go/map), [slice](https://www.codecademy.com/resources/docs/go/slices), channel, or string. This type of loop is known as a `for...range` loop:

```pseudo
for index, value = range collection {
  // Statements
}
```

In the syntax:

- `index`: A variable containing the index of the collection.
- `value`: A variable used to step through the values in `collection`.
- `collection`: The collection that the loop is stepping through.

### Example

In this example, a `for...range` loop is used to step through the elements of the slice `numbers` and print the `index`-`value` pair for each element:

```go
package main
import "fmt"

func main() {
  numbers := []string{"One","Two","Three"}

  // Loop through the slice
  for i, n := range numbers {
    fmt.Println(i, n)
  }
}
```

Here is the output:

```shell
0 One
1 Two
2 Three
```

## `break` and `continue` Statements

The `break` and `continue` statements work in Go as they do in C and Java:

- The `break` statement halts execution of a loop and continues with the next statement after the loop.
- The `continue` statement skips execution to the next iteration of the loop.

### Example

This example demonstrates the usage of `break` and `continue` statements in Go:

```go
package main
import "fmt"

func main() {
  for i := 0; i < 20; i++ {
    if i % 2 == 0 {
      continue
    }

    if i == 10 {
      break
    }

    fmt.Println(i)
  }
}
```

Here is the output:

```shell
1
3
5
7
9
11
13
15
17
19
```

## Frequently Asked Questions

### 1. Can you nest Go `for` loops?

Yes, you can nest Go `for` loops just like in other languages:

```go
for i := 0; i < 3; i++ {
  for j := 0; j < 2; j++ {
    fmt.Println(i, j)
  }
}
```

### 2. How can you label Go `for` loops?

Go allows labeled `for` loops for better control in breaking out of nested loops:

```go
outer:
for i := 0; i < 3; i++ {
  for j := 0; j < 3; j++ {
    if i == j {
      break outer
    }
  }
}
```

### 3. Is `do-while` loop supported in Go?

No, Go does not have a `do-while` loop construct. You can simulate it with an infinite loop and a `break`:

```go
for {
  fmt.Println("Do something")

  if condition {
    break
  }
}
```
