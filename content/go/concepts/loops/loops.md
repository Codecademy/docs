---
Title: 'Loops'
Description: ''
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

There are several different types of loops in Go. All are written using the `for` command using different syntax.

## Three Component Loop

The three component loop syntax is the same as ones used in C or Java. This is what is most often called a `for` loop in other languages.

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
for i := countdown; i > 0; i := i - 1 {
  fmt.Println(i) // Counts down from 10 to 1
}
```
