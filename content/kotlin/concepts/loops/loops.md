---
Title: 'Loops'
Description: 'A loop is a control structure that repeatedly executes a block of code a specified number of times or until a certain condition is met.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Loops'
  - 'While'
  - 'For'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, a **loop** is a control flow statement that allows repeated execution of a block of code for a certain number of times or until a certain condition is met. Kotlin provides several types of loops, including:

- The `for` loop, which iterates over a range of values or elements in a collection.
- The `while` loop, which repeatedly executes a block of code as long as a certain condition is true.
- The `do`-`while` loop, which is similar to the `while` loop, but guarantees that the block of code will be executed at least once before the condition is checked.

## `for` Loop

The `for` loop is used to iterate over a range of values or an iterable collection.

### Syntax

```pseudo
fun main() {
  for (item in collection) {
    // Code to be executed for each item
  }
}
```

- The `item` is an element within the `collection`.
- The `collection` is any container for a group of items such as lists and sets.

### Example

Below is an example of a `for` loop that prints the numbers 1 through 10:

```kotlin
fun main() {
  for(i in 1..10){
    print(i.toString() + " ")
  }
}
```

The `.toString()` method is used to convert `i` to a string so that a string operation can be performed on it. This will output:

```shell
1 2 3 4 5 6 7 8 9 10
```

## `while` Loop

The `while` loop is used to execute a block of code repeatedly as long as a certain condition is true.

### Syntax

```pseudo
fun main() {
  while (condition) {
    // Code to be executed while the condition is true
  }
}
```

While the `condition` evaluates to `true`, the while loop code block will execute.

### Example

The example below uses a `while` loop to print the numbers 1 through 10:

```kotlin
fun main() {
  var i = 1

  while (i <= 10) {
    print(" " + i)
    i++
  }
}
```

The output for the above code will be:

```shell
1 2 3 4 5 6 7 8 9 10
```

## `do`-`while` Loop

A `do`-`while` loop in Kotlin is similar to a `while` loop, but the code within the `do` block is executed before the condition is checked.

### Syntax

```pseudo
fun main() {
  do {
    // Code to be executed at least once
  } while (condition)
}
```

### Example

In the example below, a variable `i` is declared with an initial value of 10. The loop will continue to run while `i` is greater than 0. Upon each iteration of the loop, the value of `i` is printed and then decremented by 1 until it is no longer greater than 0. Then, the loop will exit and the program will end:

```kotlin
fun main() {
  var i = 10

  do {
    print(" " + i)
    i--
  } while (i > 0)
}
```

This will output:

```shell
10 9 8 7 6 5 4 3 2 1
```
