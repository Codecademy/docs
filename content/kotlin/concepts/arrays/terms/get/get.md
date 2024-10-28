---
Title: '.get()'
Description: 'Returns the element located at a given position in an array.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Kotlin'
  - 'Functions'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, the **`.get()`** [function](https://www.codecademy.com/resources/docs/kotlin/functions) returns the element located at a given position in an array.

## Syntax

```pseudo
arr.get(pos)
```

- `arr`: The array to be iterated.
- `pos`: The position in the array where the target element is located.

## Example

The following example demonstrates the usage of the `.get()` function:

```kotlin
fun main() {
  // Creating an array
  val arr = intArrayOf(1, 8, 16, 24, 32, 40)

  // Accessing the element located at index '3' in the array
  val elm = arr.get(3)

  // Printing the fetched element
  println("$elm")
}
```

The above code produces the following output:

```shell
24
```
