---
Title: '.reverse()'
Description: 'Reverses the order of the elements in-place in a specified array.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Functions'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, the **`.reverse()`** [function](https://www.codecademy.com/resources/docs/kotlin/functions) reverses the order of the elements in-place in a specified array.

## Syntax

```pseudo
arr.reverse()
```

- `arr`: A mutable array whose elements will be reversed in place.

## Example

The following example demonstrates the usage of the `.reverse()` function:

```kotlin
fun main() {
  // Creating an array
  val arr = intArrayOf(3, 7, 11, 15, 19)

  // Reversing the order of the elements in the array
  arr.reverse()

  // Printing the modified array
  println(arr.contentToString())
}
```

The above code produces the following output:

```shell
[19, 15, 11, 7, 3]
```
