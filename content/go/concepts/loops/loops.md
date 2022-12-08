---
Title: 'Loops'
Description: 'Go uses the for loop syntax for writing several types of loop statements.'
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

There are several kinds of loops in Go, all written with a syntax similar to the `for` loop statement.

## Three-Component Loop

In Go, loops are defined with a three-component syntax similar to what is used in `for` loops for other languages like C or Java.

### Syntax

```pseudo
for init; condition; post {
  statements
}
```

Here, the `init` statement initializes an index variable. Next, a `condition` is used to check the index variable against a boolean expression before every loop. As long as it's true, the iteration will go forward and `statements` inside the loop will execute. Lastly, the `post` statement executes after every loop, usually to increment/decrement the index variable.

### Example

This example counts down from ten to one. The init statement sets the variable `i` to 10, the condition ends the loop when `i` is no longer greater than zero, and the post statement decrements `i` by one after each pass.

```go
for i := 10; i > 0; i-- {
  fmt.Println(i) // Counts down from 10 to 1
}
```

## The While Loop

A "while" loop runs as long as the condition is true. In some languages, this is implemented with a `while` keyword. In Go, however, the "while" loop is implemented with a `for` loop by omitting the `init` and `post` statements.

### Syntax

```pseudo
for condition {
  statements
}
```

The loop will execute as long as `condition` remains true.

### Example

This example behaves exactly the same way as the prior example, except the variable `countdown` is initialized outside the loop, and is decremented inside the loop itself. The condition still runs the loop as long as `countdown` is still greater than zero.

```go
countdown := 10
for countdown > 0 {
  fmt.Println(countdown) // counts down from 10 to 1
  countdown--
}
```

## An Infinite Loop

If the condition statement is omitted along with the post and init statements, the loop will execute indefinitely unless a `break` statement is encountered.

### Syntax

```pseudo
for {
  statements
}
```

### Example

This example will print the string "Help! I'm trapped in a loop!" until the program is halted externally.

```go
for {
  fmt.Println("Help! I'm trapped in a loop!") // executes forever
}
```

## A Range Loop

By using the `range` keyword, a `for` loop can step through the items in a collection such as a array, map, slice, channel, or string.

### Syntax

```pseudo
for index, value = range collection {
  statements
}
```

Where `index` is a variable containing the index of the collection, `value` is a variable used to step through the values in `collection`, and `collection` is the collection the loop is stepping through.

### Example

In the example below, a range loop steps through the elements of the slice `numbers` and prints the index-value pair for each element.

```go
numbers := []string{"One","Two","Three"}
for i, n := range numbers {
  fmt.Println(i,n)
}
```

This example leads to the following output:

```pseudo
0 One
1 Two
2 Three
```

## `break` and `continue`

The `break` and `continue` statements work in Go as they do in C and Java.

- A `break` statement halts execution of a loop and continues with the next statement after the loop.
- The `continue` statement skips execution to the next iteration of the loop.

### Codebyte Example

```codebyte/golang
package main
import "fmt"

func main() {
  for i := 0; i < 100; i++ {
    if i % 2 == 0 {
      continue
    }
    if i == 50 {
      break
    }
    fmt.Println(i)
  }
}
```
