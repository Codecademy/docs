---
Title: 'Loops'
Description: 'Loops are used to repeatedly perform a statement(s) or block of code.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Loops'
  - 'For'
  - 'While'
  - 'Control Flow'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Loops** are used to repeatedly perform a statement(s) or block of code. In Swift, there is the **`for`-`in`** loop and **`while`** loop.

## `for`-`in` Loop

The `for`-`in` loop is used to iterate over collections, including strings and ranges.

```swift
for char in "hehe" {
  print(char)
}
```

The output would be:

```shell
h
e
h
e
```

### `continue` Keyword

The `continue` keyword will force the loop to move on to the next iteration.

```swift
for num in 0...5 {
  if num % 2 == 0 {
    continue
  }
  print(num)
}
```

The output would be:

```shell
1
3
5
```

### `break` Keyword

To terminate a loop before its completion, use the `break` keyword.

```swift
for char in "supercalifragilisticexpialidocious" {
  if char == "c" {
    break
  }
  print(char)
}
```

The output would be:

```shell
s
u
p
e
r
```

### Ranges

Ranges created by the `...` operator will include the numbers from the lower bound to (and including) the upper bound.

```swift
let zeroToThree = 0...3

// zeroToThree: 0, 1, 2, 3
```

### Using Underscore

An underscore `_` is used instead of a placeholder variable if the variable is not referenced in the `for`-`in` loop body.

```swift
for _ in 1...3 {
  print("Olé")
}
```

The output would be:

```shell
Olé
Olé
Olé
```

### `stride()` Function

Calling `stride()` with the 3 necessary arguments creates a collection of numbers; the arguments decide the starting number to the (excluded) ending number, and how to increment/decrement from the start to the end.

```swift
for oddNum in stride(from: 1, to: 5, by: 2) {
  print(oddNum)
}
```

The output would be:

```shell
1
3
```

## `while` Loop

A `while` loop accepts a condition and continually executes its body’s code for as long as the provided condition is `true`.

If the condition is never `false` then the loop continues to run and the program is stuck in an infinite loop.

```swift
var counter = 1
var stopNum = Int.random(in: 1...10)

while counter < stopNum {
  print(counter)
  counter += 1
}

// The loop prints until the stop condition is met
```
