---
Title: '.indices'
Description: 'Returns a range indicating the valid indices in an array.'
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

In Kotlin, the **`.indices`** property returns a range indicating the valid indices in an array.

## Syntax

```pseudo
arr.indices
```

- `arr`: The array to be iterated.

## Example

The following example demonstrates the usage of the `.indices` property:

```kotlin
fun main() {
  // Creating an array
  val arr = intArrayOf(1, 6, 12, 18, 24, 30)

  // Using the '.indices' property
  val num = arr.indices

  // Printing the result
  println("$num")
}
```

The above code produces the following output:

```shell
0..5
```
