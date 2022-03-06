---
Title: 'Loops'
Description: 'There are several different types of loops in Go. All are written using the `for` statement with different syntaxes.'
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

There are several different types of loops in Go. All are written using the `for` statement with different syntaxes.

## Three-Component Loop

The three-component loop syntax is the same as those used in C or Java. This is often called a `for` loop in other languages.

### Syntax

```pseudo
for init; condition; post {
  statements
}
```

Here `init` is a statement initalizing an index variable. `condition` is a boolean expression checking the index variable before every loop, telling the loop to execute as long as it's true. And `post` is a statement executed after every loop to increment/decrement the index variable.

### Example

```go
countdown := 10
for i := countdown; i > 0; i-- {
  fmt.Println(i) // Counts down from 10 to 1
}
```

## The While Loop

A "while" loop is a loop that runs as long as the condition is true. In some languages, this is implemented with the keyword `while`. In Go, the "while" loop is implemented with a `for` loop omitting the `init` and `post` statements.

### Syntax

```pseudo
for condition {
  statements
}
```

The loop will execute as long as `condition` remains true.

### Example

```go
countdown := 10
for countdown > 0 {
  fmt.Println(countdown) // counts down from 10 to 1
  countdown--
}
```

## An Infinite Loop

If the condition statement is omitted along with the `post` and `init` statements, the loop will execute indefinitely unless a `break` statement is encountered.

### Syntax

```pseudo
for {
  statements
}
```

### Example

```go
for {
  fmt.Println("Help! I'm trapped in a loop!") // executes forever
}
```

## A Range Loop

By using the `range` keyword, a `for` loop can step through the items in a collection such as a `map`, `slice`, `channel` or `string`.

### Syntax

```pseudo
for index, value = range collection {
  statements
}
```

Where `index` is a variable containing the index of the collection, `value` is a variable used to step through the values in `collection`, and `collection` is the collection the loop is stepping through.

### Example

```go

numbers := []string{"One","Two","Three"}
for i, n := range numbers {
  fmt.Println(i,n)
}

// Output:
// 0 One
// 1 Two
// 2 Three
```

## `break` and `continue`

The `break` and `continue` statements work in Go as they do in C and Java. A `break` statement halts execution of a loop and continues with the next statement after the loop. The `continue` statement skips execution to the next iteration of the loop.

### Examples

```go
for i := 0; i < 100; i++ {
  if i % 2 == 0 {
    continue
  }
  fmt.Println(i) // only prints odd numbers
}
```

```go
i := 0
for {
  i++
  if i == 50 {
    break
  }
  fmt.Println(i) // only prints numbers 0 to 49
}
```
