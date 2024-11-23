---
Title: '.size'
Description: 'Calculates the number of elements in an array.'
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

In Kotlin, the **`.size`** property calculates the number of elements in an array.

## Syntax

```pseudo
arr.size
```

- `arr`: The array whose size is to be accessed.

## Example

The following example demonstrates the usage of the `.size` property:

```kotlin
fun main() {
  // Creating an array
  val arr = intArrayOf(1, 7, 14, 21, 28, 35)

  // Calculating the number of elements in the array
  val num = arr.size

  // Printing the result
  println("$num")
}
```

The above code produces the following output:

```shell
6
```
